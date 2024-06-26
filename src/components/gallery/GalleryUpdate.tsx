import { axiosValid_API } from '@/api/common/axios_instance';
import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '@/components/common/form/form-layout/layout-form-header/LayoutFormHeader';
import GalleryCategoryMenu from '@/components/gallery/gallery-form/GalleryCategoryMenu';
import GalleryForm from '@/components/gallery/gallery-form/GalleryForm';
import GalleryTags from '@/components/gallery/gallery-form/GalleryTags';
import useToast from '@/hooks/client/useToast';
import useFetchGalleryDetailQuery from '@/hooks/server/gallery/useFetchGalleryDetailQuery';
import useUpdateGalleryMutation from '@/hooks/server/gallery/useUpdateGalleryMutaion';
import { galleryUpdatePrevImage, getBase64 } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { isEqual } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import GalleryUploadImage from './gallery-form/GalleryUploadImage';

const isFile = (value: unknown): value is File => value instanceof File;

const galleryFormSchema = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요.' }),
  description: z.string().min(1, { message: '내용을 입력해주세요.' }),
  images: z.array(z.custom(isFile)).max(4, { message: '사진은 최대 4개까지만 등록 가능합니다.' }),
  tags: z
    .array(z.string())
    .min(1, { message: '카테고리를 최소 1개 이상 등록해주세요.' })
    .max(4, { message: '카테고리는 최대 4개까지만 추가 가능합니다.' }),
});

export type T_gallerySchema = z.infer<typeof galleryFormSchema>;

const GalleryUpdate = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const { data: gallery, isLoading } = useFetchGalleryDetailQuery(id);
  const { mutate: updateGallery, data: updatedGalleryData } = useUpdateGalleryMutation();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedThumbnail, setSelectedThumbnail] = useState<File | null>(null);
  const [existingImages, setExistingImages] = useState<{ id: number; postId: number; image: string }[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [defaultImage, setDefaultImage] = useState<string[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [deletedImages, setDeletedImages] = useState<number[]>([]);
  const form = useForm<T_gallerySchema>({
    defaultValues: {
      title: '',
      description: '',
      tags: [],
      images: [],
    },
    resolver: zodResolver(galleryFormSchema),
  });

  useEffect(() => {
    (async () => {
      if (gallery) {
        form.setValue('title', gallery.title);
        form.setValue('description', gallery.content);
        form.setValue(
          'tags',
          gallery.postcategory.map(category => category.category),
        );
        form.setValue(
          'images',
          await Promise.all(gallery.images.map(async imageData => await galleryUpdatePrevImage(imageData.image))),
        );
        setDefaultImage([
          ...(await Promise.all(
            gallery.images.map(async imageData => {
              const file = await galleryUpdatePrevImage(imageData.image);
              return await getBase64(file);
            }),
          )),
        ]);
        setPreviewImages(gallery.images.map(image => image.image));
        setExistingImages(gallery.images);
      }
    })();
  }, [gallery, form]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAddTag = () => {
    const currentTags = form.getValues('tags');

    if (selectedCategory) {
      if (currentTags.length >= 4) {
        alert('카테고리는 최대 4개까지만 등록 가능합니다.');
      } else if (currentTags.includes(selectedCategory)) {
        alert('이미 선택된 카테고리입니다. 다른 카테고리를 선택해주세요.');
      } else {
        form.setValue('tags', [...currentTags, selectedCategory]);
        setSelectedCategory('');
      }
    }
  };

  const handleThumbnailChange = (file: File | null, dataUrl: string) => {
    setSelectedThumbnail(file);
  };

  const handleImageUpload = (files: File[]) => {
    const newImageFiles = [...newImages, ...files];
    setNewImages(newImageFiles);

    const urls = [
      ...(gallery?.images?.map(image => getBase64(new File([image.image], 'temp.png'))) || []),
      ...files.map(file => getBase64(file)),
    ];

    Promise.all(urls)
      .then(base64Images => {
        setPreviewImages([...previewImages, ...base64Images]);
        form.setValue('images', [...existingImages, ...newImageFiles]);
      })
      .catch(console.error);
  };

  const handleImageDelete = (index: number) => {
    if (index < existingImages.length) {
      const newExistingImages = [...existingImages];
      newExistingImages.splice(index, 1);
      setExistingImages(newExistingImages);
      setDeletedImages([...deletedImages, existingImages[index].id]);
    } else {
      const newImageFiles = [...newImages];
      newImageFiles.splice(index - existingImages.length, 1);
      setNewImages(newImageFiles);
    }

    const newPreviewImages = [...previewImages];
    newPreviewImages.splice(index, 1);
    setPreviewImages(newPreviewImages);

    form.setValue('images', [...existingImages, ...newImages]);
  };

  const tags = form.getValues('tags');

  const submitGalleryHandler = async (values: T_gallerySchema) => {
    if (form.formState.errors.images) {
      console.log(form.formState.errors.images.message);
      return;
    }

    const deleteImages: { id: number; postId: number; image: string }[] =
      gallery?.images
        .filter((_, index) => deletedImages.includes(index))
        .map(image => ({ id: image.id, postId: image.postId, image: image.image })) || [];

    const isChanged =
      values.title !== gallery?.title ||
      values.description !== gallery?.content ||
      !isEqual(
        values.tags,
        gallery?.postcategory.map(category => category.category),
      );

    if (!isChanged) {
      const confirmed = window.confirm('변경 내역이 없습니다. 저장하시겠습니까?');
      if (confirmed) {
        router.push(`/gallery/detail/${id}`);
      }
      return;
    }

    if (values.title.length < 0) {
      toast({
        title: '제목이 없습니다. ',
        variant: 'danger',
        position: 'top-center',
        closeTimeOut: 2000,
      });
      return;
    } else if (values.description.length < 0) {
      toast({
        title: '내용이 없습니다. ',
        variant: 'danger',
        position: 'top-center',
        closeTimeOut: 2000,
      });
      return;
    } else if (values.tags.length < 0) {
      toast({
        title: '태그가 없습니다. ',
        variant: 'danger',
        position: 'top-center',
        closeTimeOut: 2000,
      });
      return;
    } else if (values.images.length < 0) {
      toast({
        title: '이미지가 없습니다. ',
        variant: 'danger',
        position: 'top-center',
        closeTimeOut: 2000,
      });
      return;
    }

    const data = {
      title: values.title,
      content: values.description,
      tags: values.tags,
      images: {
        file: await Promise.all(values.images.map(async image => await getBase64(image as File))),
        fileName: values.images.map((file: unknown) => (file as File).name),
      },
    };
    console.log(values);
    try {
      const res = await axiosValid_API.patch(`post/${id}?dataType=formData`, data);
      console.log(res);

      // router.push(`/gallery/detail/${id}`);
    } catch (error) {
      console.error('갤러리 수정 실패:', error);
    }
  };

  const { errors } = form.formState;

  if (isLoading) return <div>로딩 중입니다...</div>;

  return (
    <LayoutForm form={form} className="mx-auto my-0 bg-FFFDF9 border-none flex justify-center">
      <div className="w-[84.6rem]">
        <LayoutFormHeader title="Gallery 수정" />
        <LayoutFormBody>
          <GalleryForm onSubmit={form.handleSubmit(submitGalleryHandler)}>
            <GalleryForm.input
              name="title"
              label="제목"
              labelCn="text-2xl"
              className={`w-full h-[4.8rem] text-2xl ${errors['title'] && 'border-red-500'}`}
              control={form.control}
            />
            <GalleryForm.textarea
              name="description"
              label="내용"
              labelCn="text-2xl"
              className={`w-full resize-none h-[24rem] text-2xl ${errors['description'] && 'border-red-500'}`}
              control={form.control}
            />
            <GalleryUploadImage
              name="images"
              className={`w-full ${errors['images'] && 'border-red-500'}`}
              control={form.control}
              onThumbnailChange={handleThumbnailChange}
              // onImageDelete={handleImageDelete}
              // onImageUpload={handleImageUpload}
              // defaultImages={gallery?.images.map(image => image.image) || []}
            />
            <div>
              <div className="flex items-center space-x-4">
                <GalleryCategoryMenu
                  selectedCategory={selectedCategory}
                  onCategorySelect={handleCategorySelect}
                  onAddTags={handleAddTag}
                  tags={tags}
                />
              </div>
              <GalleryTags control={form.control} name={'tags' as never} tags={tags} />
            </div>
            <GalleryForm.button type="submit" className="w-[84.6rem] h-[4.8rem] text-2xl">
              수정
            </GalleryForm.button>
          </GalleryForm>
        </LayoutFormBody>
      </div>
    </LayoutForm>
  );
};

export default GalleryUpdate;
