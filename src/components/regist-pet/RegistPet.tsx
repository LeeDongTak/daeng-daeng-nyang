import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../common/form/form-layout/LayoutForm';
import LayoutFormHeader from '../common/form/form-layout/layout-form-header/LayoutFormHeader';
import FileController from '../common/form/input-file/FileController';
import CustomInput from '../common/form/input-text/CustomInput';
import PetForm from './pet-form/PetForm';

// https://github.com/colinhacks/zod#custom-schemas
const formSchema = z.object({
  // name: z.string(), // 반려동물 이름
  // age: z.string(), // 반려동물 나이
  file: z.instanceof(File).nullable(), // 반려동물 이미지
  // el : z.custom<File>((val)=>{
  //   return  val === File
  // })
  // sex: z.string(), //수컷 암컷, 중성 // checkbox로 하기
  // kind: z.string(), // 종류
});

type T_Schema = z.infer<typeof formSchema>;
const RegistPet = () => {
  const form = useForm<T_Schema>({
    resolver: zodResolver(formSchema),
  });
  const submitHandler = (value: T_Schema) => {
    console.log(value);
  };

  return (
    <LayoutForm form={form}>
      {/* <input type="file" onChange={} /> */}
      <LayoutFormHeader title="반려동물 등록" />
      <PetForm onSubmit={form.handleSubmit(submitHandler)}>
        <FileController
          name="file"
          control={form.control}
          render={({ base64, register, remove, select, ...props }) => <CustomInput {...register} />}
        />
        {/* <PetForm.input control={form.control} name="file" label="사진" type="file" /> */}
        {/* <PetForm.input control={form.control} name="name" label="이름" />
      <PetForm.input control={form.control} name="age" label="나이" />
      <PetForm.input control={form.control} name="sex" label="성별" />
    <PetForm.input control={form.control} name="kind" label="종류" /> */}
        <PetForm.button text="버튼" />
      </PetForm>
    </LayoutForm>
  );
};

export default RegistPet;
