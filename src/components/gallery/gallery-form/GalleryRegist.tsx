import useAddGalleryMutation from '@/hooks/server/gallery/useAddGalleryMutation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../../common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '../../common/form/form-layout/layout-form-header/LayoutFormHeader';
import GalleryCategoryMenu from './GalleryCategoryMenu';
import GalleryForm from './GalleryForm';
import GalleryTags from './GalleryTags';
import GalleryUploadImage from './GalleryUploadImage';
const isFile = (value: unknown): value is File => value instanceof File;
const galleryFormSchema = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요.' }),
  description: z.string().min(1, { message: '내용을 입력해주세요.' }),
  images: z.array(z.custom(isFile)).min(1, { message: '사진은 반드시 하나 이상 등록해야 합니다.' }),
  tags: z
    .array(z.string())
    .min(1, { message: '카테고리를 최소 1개 이상 등록해주세요.' })
    .max(4, { message: '카테고리는 최대 4개까지만 추가 가능합니다.' }),
});
export type T_gallerySchema = z.infer<typeof galleryFormSchema>;
const GalleryRegist = () => {
  const { mutate } = useAddGalleryMutation();

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
    mutate(values);
  };
  const { errors } = form.formState;

  const TEST = [
    {
      component: GalleryForm.input({
        name: 'title',
        label: '제목',
        labelCn: 'text-2xl',
        className: `w-full  h-[4.8rem] text-2xl ${errors['title'] && 'border-red-500'}`,
        control: form.control,
      }),
    },
    {
      component: GalleryForm.textarea({
        name: 'description',
        label: '내용',
        labelCn: 'text-2xl',
        className: `w-full resize-none h-[24rem] text-2xl ${errors['description'] && 'border-red-500'}`,
        control: form.control,
      }),
    },
    {
      component: GalleryUploadImage({
        name: 'images',
        className: `w-full ${errors['images'] && 'border-red-500'}`,
        onThumbnailChange: handleThumbnailChange,
        control: form.control,
      }),
    },
  ];

  return (
    <LayoutForm form={form} className="mx-auto my-0 bg-FFFDF9 border-none flex justify-center">
      <div className="w-[84.6rem]">
        <LayoutFormHeader title="Gallery 등록" />
        <LayoutFormBody>
          <GalleryForm onSubmit={form.handleSubmit(submitGalleryHandler)}>
            {TEST.map(Field => {
              return Field.component;
            })}
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
              등록
            </GalleryForm.button>
          </GalleryForm>
        </LayoutFormBody>
      </div>
    </LayoutForm>
  );
};
export default GalleryRegist;
