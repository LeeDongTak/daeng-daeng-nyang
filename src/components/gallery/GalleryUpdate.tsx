import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '@/components/common/form/form-layout/layout-form-header/LayoutFormHeader';
import GalleryCategoryMenu from '@/components/gallery/gallery-form/GalleryCategoryMenu';
import GalleryForm from '@/components/gallery/gallery-form/GalleryForm';
import GalleryTags from '@/components/gallery/gallery-form/GalleryTags';
import useFetchGalleryDetailQuery from '@/hooks/server/gallery/useFetchGalleryDetailQuery';
import useUpdateGalleryMutation from '@/hooks/server/gallery/useUpdateGalleryMutaion';
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
// !! 이미지 서버에서 주는 url을 문자열로 바꿔서 이미지 태그에 끼워넣어야함.
// !! 서버에 저장된 이미지 수정 시 전체 데이터 삭제 후 재등록하도록 되어 있기 때문

export type T_gallerySchema = z.infer<typeof galleryFormSchema>;

const GalleryUpdate = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const { data: gallery, isLoading, refetch } = useFetchGalleryDetailQuery(id);
  const { mutate: updateGallery } = useUpdateGalleryMutation();

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedThumbnail, setSelectedThumbnail] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const form = useForm<T_gallerySchema>({
    defaultValues: {
      title: '',
      description: '',
      tags: [],
      images: [],
    },
    resolver: zodResolver(galleryFormSchema),
  });

  // 기존 데이터 받아오기
  useEffect(() => {
    if (gallery) {
      form.setValue('title', gallery.title);
      form.setValue('description', gallery.content);
      form.setValue(
        'tags',
        gallery.postcategory.map(category => category.category),
      );
      setPreviewImages(gallery.images.map(image => image.image));
      setUploadedImages([]);
    }
  }, [gallery]);

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

  const handleThumbnailChange = (file: File | null) => {
    setSelectedThumbnail(file);
  };

  // const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (!files) return;

  //   const selectedFiles = Array.from(files);
  //   const limitedFiles = selectedFiles.slice(0, 4 - uploadedImages.length);
  //   const newUploadedImages = [...uploadedImages, ...limitedFiles];
  //   setUploadedImages(newUploadedImages);

  //   Promise.all(limitedFiles.map(getBase64))
  //     .then(base64Images => {
  //       setPreviewImages([...previewImages, ...base64Images]);
  //       form.setValue('images', newUploadedImages);
  //     })
  //     .catch(console.error);
  // };

  const tags = form.getValues('tags');

  const submitGalleryHandler = async (values: T_gallerySchema) => {
    if (form.formState.errors.images) {
      console.log(form.formState.errors.images.message);
      return;
    }

    const isChanged =
      values.title !== gallery?.title ||
      values.description !== gallery?.content ||
      !isEqual(
        values.tags,
        gallery?.postcategory.map(category => category.category),
      ) ||
      !isEqual(
        previewImages,
        gallery?.images.map(image => image.image),
      );

    if (!isChanged) {
      const confirmed = window.confirm('변경 내역이 없습니다. 저장하시겠습니까?');
      if (confirmed) {
        router.push(`/gallery/detail/${id}`);
      }
      return;
    }

    const formData = new FormData();
    formData.append('thumbnail', selectedThumbnail as Blob);
    formData.append('title', values.title);
    formData.append('content', values.description);
    values.tags.forEach((tag, index) => {
      formData.append(`tags[${index}]`, tag);
    });
    const images = gallery?.images || [];
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image.image);
    });

    uploadedImages.forEach((image, index) => {
      formData.append(`images[${index}]`, image as Blob);
    });

    updateGallery(
      { id, formData },
      {
        onSuccess: async () => {
          alert('갤러리가 성공적으로 수정되었습니다.');
          await refetch();
          router.push(`/gallery/detail/${id}`);
        },
        onError: error => {
          alert('갤러리 수정에 실패했습니다. 다시 시도해주세요.');
          console.error('갤러리 수정 실패:', error);
          console.log('FormData:', Object.fromEntries(formData.entries()));
        },
      },
    );
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
              onThumbnailChange={handleThumbnailChange}
              control={form.control}
              defaultImages={gallery?.images || []}
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
