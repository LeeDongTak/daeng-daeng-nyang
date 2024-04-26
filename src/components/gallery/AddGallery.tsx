import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../common/form/form-layout/layout-form-body/LayoutFormBody';
import GalleryForm from './gallery-form/GalleryForm';

const galleryFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  picture: z.string().optional(),
});

type T_gallerySchema = z.infer<typeof galleryFormSchema>;

const AddGallery = () => {
  const galleryForm = useForm<T_gallerySchema>({
    defaultValues: {
      title: '',
      description: '',
      picture: '',
    },
  });

  const submitGalleryHandler = (values: z.infer<typeof galleryFormSchema>) => {
    console.log(values);
  };

  const handleImageUpload = () => {
    // 로컬 이미지 선택 모달 열기 로직
  };

  return (
    <LayoutForm form={galleryForm} className="mx-auto my-0 bg-FFFDF9 border-none">
      <LayoutFormBody>
        <GalleryForm onSubmit={galleryForm.handleSubmit(submitGalleryHandler)}>
          <GalleryForm.input
            control={galleryForm.control}
            name="title"
            label="제목"
            className="w-[84.6rem] h-[4.8rem]"
          />
          <GalleryForm.textarea
            control={galleryForm.control}
            name="description"
            label="내용"
            className="w-[84.6rem] h-[24rem]"
          />
          <GalleryForm.button type="submit">등록</GalleryForm.button>
        </GalleryForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default AddGallery;
