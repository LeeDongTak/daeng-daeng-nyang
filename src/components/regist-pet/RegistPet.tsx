import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../common/form/form-layout/LayoutForm';
import LayoutFormHeader from '../common/form/form-layout/layout-form-header/LayoutFormHeader';

// https://github.com/colinhacks/zod#custom-schemas
const formSchema = z.object({
  name: z.string(), // 반려동물 이름
  age: z.string(), // 반려동물 나이
  file: z.instanceof(File), // 반려동물 이미지
  // el : z.custom<File>((val)=>{
  //   return  val === File
  // })
  sex: z.string(), //수컷 암컷, 중성
  kind: z.string(), // 종류
});
type T_Schema = z.infer<typeof formSchema>;
const RegistPet = () => {
  const form = useForm<T_Schema>({
    resolver: zodResolver(formSchema),
  });
  return (
    <LayoutForm form={form}>
      <LayoutFormHeader title="반려동물 등록" />
    </LayoutForm>
  );
};

export default RegistPet;
