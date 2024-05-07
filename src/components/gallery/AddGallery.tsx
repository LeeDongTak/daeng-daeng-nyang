import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '../common/form/form-layout/layout-form-header/LayoutFormHeader';
import GalleryCategoryMenu from './GalleryCategoryMenu';
import GalleryForm from './gallery-form/GalleryForm';
import GalleryTags from './gallery-form/GalleryTags';
import GalleryUploadImage from './gallery-form/GalleryUploadImage';
import { I_GalleryData } from './type/gallery';
const galleryFormSchema = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요.' }),
  description: z.string().min(1, { message: '내용을 입력해주세요.' }),
  images: z.array(z.instanceof(File)),
  tags: z
    .array(z.string())
    .min(1, { message: '카테고리를 1개 이상 등록해주세요.' })
    .max(4, { message: '카테고리는 최대 4개까지만 추가 가능합니다.' }),
});

type T_gallerySchema = z.infer<typeof galleryFormSchema>;
const AddGallery = ({ onAddGallery }: { onAddGallery: (newGallery: I_GalleryData) => void }) => {
  const form = useForm<T_gallerySchema>({
    defaultValues: { title: '', description: '', tags: [], images: [] },
    resolver: zodResolver(galleryFormSchema),
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedThumbnail, setSelectedThumbnail] = useState<File | null>(null);
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
  const tags = form.getValues('tags');
  const submitGalleryHandler = async (values: T_gallerySchema) => {
    try {
      const formData = new FormData();
      if (selectedThumbnail) {
        formData.append('thumbnail', selectedThumbnail);
      }
      formData.append('title', values.title);
      formData.append('content', values.description);
      formData.append('tags', JSON.stringify(values.tags));
      values.images.forEach((image, index) => formData.append(`images[${index}]`, image));
      console.log(values.title);
      console.log(values.description);
      console.log(values.tags);
      console.log(values.images);
      console.log(selectedThumbnail);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}post`, formData);

      if (response.status === 200) {
        // 성공적으로 등록
        onAddGallery(response.data);
        // 추가적인 동작
      } else {
        // 등록 실패 시의 처리
        console.error('갤러리 등록 실패:', response.data);
      }
    } catch (error) {
      console.error('갤러리 등록 실패:', error);
    }
  };

  return (
    <LayoutForm form={form} className="mx-auto my-0 bg-FFFDF9 border-none flex justify-center">
      <div className="w-[84.6rem]">
        <LayoutFormHeader title="Gallery 등록" />
        <LayoutFormBody>
          <GalleryForm onSubmit={form.handleSubmit(submitGalleryHandler)}>
            <GalleryForm.input
              control={form.control}
              name="title"
              label="제목"
              className="w-full h-[4.8rem] text-2xl "
            />

            <GalleryForm.textarea
              control={form.control}
              name="description"
              label="내용"
              className="w-full h-[24rem] text-2xl"
            />
            <GalleryUploadImage
              className="w-full "
              onThumbnailChange={handleThumbnailChange}
              control={form.control}
              name="images"
            />
            <div>
              <div className="flex items-center space-x-4">
                <GalleryCategoryMenu selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="w-[4.8rem] h-[4.8rem] border-[#C5C9CF] border-1 text-[2.4rem] leading-8"
                >
                  +
                </button>
              </div>
              <GalleryTags control={form.control} name={'tags' as never} tags={tags} />
            </div>
            <GalleryForm.button type="submit">등록</GalleryForm.button>
          </GalleryForm>
        </LayoutFormBody>
      </div>
    </LayoutForm>
  );
};
export default AddGallery;
