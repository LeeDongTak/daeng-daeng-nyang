import { zodResolver } from '@hookform/resolvers/zod';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormFooter from '../common/form/form-layout/layout-form-footer/LayoutFormFooter';
import LayoutFormHeader from '../common/form/form-layout/layout-form-header/LayoutFormHeader';
import CustomCalendarInput from '../common/form/input-calendar/CustomCalendarInput';
import FileController from '../common/form/input-file/FileController';
import PetForm from './pet-form/PetForm';

// https://github.com/colinhacks/zod#custom-schemas
const formSchema = z.object({
  file: z.instanceof(File).nullable(), // 반려동물 이미지
  name: z.string(), // 반려동물 이름
  age: z.string(), // 반려동물 나이
  breed: z.string(), // 종류
  gender: z.enum(['수컷', '암컷', '중성']), //수컷 암컷, 중성 // checkbox로 하기
  date: z.date(),
});
const PET_GENDER_GROUP = [
  { value: '수컷', label: '수컷' },
  { value: '암컷', label: '암컷' },
  { value: '중성', label: '중성화' },
];
type T_Schema = z.infer<typeof formSchema>;
const RegistPet = () => {
  const form = useForm<T_Schema>({
    defaultValues: {
      file: null, // zod에서 nullable을 줬습니다. 그리고 null로 default를 해줘야 파일이 선택 안되어있을 때도 zod에서 parsing을 성공합니다. defaultValues를 안해주면 undefined이고, 버튼 클릭시 zod parsing이 실패로 됩니다.
      name: '',
      age: '',
      breed: '',
    },
    resolver: zodResolver(formSchema),
  });
  const submitHandler = (value: T_Schema) => {
    console.log(value);
  };
  return (
    <LayoutForm form={form}>
      <LayoutFormHeader title="반려동물 등록" />
      <LayoutFormBody>
        <PetForm onSubmit={form.handleSubmit(submitHandler)} className="flex">
          <FileController
            name="file"
            control={form.control}
            render={({ base64, register, remove, select, ...props }) => (
              <Fragment>
                <PetForm.previewImage remove={remove} base64={base64} />
                <PetForm.file register={register} />
              </Fragment>
            )}
          />
          <div>
            <CustomCalendarInput control={form.control} name="date" />
            <PetForm.radio control={form.control} name="gender" title="성별" radioItem={PET_GENDER_GROUP} />
            <PetForm.input control={form.control} name="name" label="이름" />
            <PetForm.input control={form.control} name="age" label="나이" />
            <PetForm.input control={form.control} name="breed" label="종류" />
          </div>
          <div>
            <PetForm.button text="버튼" type="submit" />
          </div>
        </PetForm>
      </LayoutFormBody>
      <LayoutFormFooter></LayoutFormFooter>
    </LayoutForm>
  );
};

export default RegistPet;
