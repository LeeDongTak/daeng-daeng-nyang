import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormFooter from '../common/form/form-layout/layout-form-footer/LayoutFormFooter';
import LayoutFormHeader from '../common/form/form-layout/layout-form-header/LayoutFormHeader';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import PetForm from './pet-form/PetForm';

// https://github.com/colinhacks/zod#custom-schemas
const formSchema = z.object({
  //file: z.instanceof(File).nullable(), // 반려동물 이미지
  //name: z.string(), // 반려동물 이름
  //age: z.string(), // 반려동물 나이
  //kind: z.string(), // 종류
  sex: z.enum(['male', 'female', 'neutrality']), //수컷 암컷, 중성 // checkbox로 하기
});

type T_Schema = z.infer<typeof formSchema>;
const RegistPet = () => {
  const form = useForm<T_Schema>({
    defaultValues: {
      //file: null, // zod에서 nullable을 줬습니다. 그리고 null로 default를 해줘야 파일이 선택 안되어있을 때도 zod에서 parsing을 성공합니다. defaultValues를 안해주면 undefined이고, 버튼 클릭시 zod parsing이 실패로 됩니다.
      //name: '',
      //age: '',
      //kind: '',
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
          {/* <FileController
            name="file"
            control={form.control}
            render={({ base64, register, remove, select, ...props }) => (
              <Fragment>
                <PetForm.previewImage remove={remove} base64={base64} />
                <PetForm.file register={register} />
              </Fragment>
            )}
          /> */}
          <div>
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Notify me about...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      // onValueChange={field.onChange}
                      // defaultValue={field.value}
                      {...field}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">All new messages</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">Direct messages and mentions</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="neutrality" />
                        </FormControl>
                        <FormLabel className="font-normal">Nothing</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <PetForm.input control={form.control} name="name" label="이름" />
            <PetForm.input control={form.control} name="age" label="나이" />
            <PetForm.input control={form.control} name="sex" label="성별" />
            <PetForm.input control={form.control} name="kind" label="종류" /> */}
          </div>
          <PetForm.button text="버튼" type="submit" />
        </PetForm>
      </LayoutFormBody>
      <LayoutFormFooter></LayoutFormFooter>
    </LayoutForm>
  );
};

export default RegistPet;
