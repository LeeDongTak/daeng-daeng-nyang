import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '../common/form/form-layout/layout-form-header/LayoutFormHeader';
import GalleryCategoryMenu from './GalleryCategoryMenu';
import GalleryForm from './gallery-form/GalleryForm';
import GalleryTags from './gallery-form/GalleryTags';
import GalleryUploadTest from './gallery-form/galleryUploadTest';
const galleryFormSchema = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요.' }),
  description: z.string().min(1, { message: '내용을 입력해주세요.' }),
  tags: z
    .array(z.object({ id: z.string(), value: z.string() }))
    .min(1, { message: '카테고리를 1개 이상 등록해주세요.' })
    .max(4, { message: '카테고리는 최대 4개까지만 추가 가능합니다.' }),
});
type T_gallerySchema = z.infer<typeof galleryFormSchema>;
const AddGallery = () => {
  const form = useForm<T_gallerySchema>({
    defaultValues: { title: '', description: '', tags: [] },
    resolver: zodResolver(galleryFormSchema),
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  const handleAddTag = () => {
    const currentTags = form.getValues('tags');

    if (selectedCategory) {
      if (currentTags.length >= 4) {
        alert('카테고리는 최대 4개까지만 등록 가능합니다.');
      } else if (currentTags.some(tag => tag.value === selectedCategory)) {
        alert('이미 선택된 카테고리입니다. 다른 카테고리를 선택해주세요.');
      } else {
        form.setValue('tags', [...currentTags, { id: String(Date.now()), value: selectedCategory }]);
        setSelectedCategory('');
      }
    }
  };
  const values = form.getValues('tags');
  const submitGalleryHandler = (values: T_gallerySchema) => {
    console.log(values);
  };
  return (
    <LayoutForm form={form} className="mx-auto my-0 bg-FFFDF9 border-none">
      <LayoutFormHeader title="Gallery 등록" />
      <LayoutFormBody>
        <GalleryForm onSubmit={form.handleSubmit(submitGalleryHandler)}>
          <GalleryForm.input
            control={form.control}
            name="title"
            label="제목"
            className="w-[84.6rem] h-[4.8rem] text-2xl"
          />
          <GalleryForm.textarea
            control={form.control}
            name="description"
            label="내용"
            className="w-[84.6rem] h-[24rem] text-2xl"
          />
          <GalleryUploadTest className="w-[84.6rem] mx-auto" />
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
            <GalleryTags control={form.control} name={'tags'} tags={values} />
          </div>
          <GalleryForm.button type="submit">등록</GalleryForm.button>
        </GalleryForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};
export default AddGallery;
