import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import AuthForm from '../form/AuthForm';
import LayoutForm from '../form/layout-form/LayoutForm';
import LayoutFormBody from '../form/layout-form/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '../form/layout-form/layout-form-header/LayoutFormHeader';

const formSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
  passwordCheck: z.string().min(2),
});

type T_Schema = z.infer<typeof formSchema>;
const SignUp = () => {
  const form = useForm<T_Schema>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
    resolver: zodResolver(formSchema),
  });
  const submitHandler = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <LayoutForm form={form}>
      <LayoutFormHeader title="회원가입" />
      <LayoutFormBody>
        <AuthForm onSubmit={form.handleSubmit(submitHandler)}>
          <AuthForm.input control={form.control} name="email" label="이메일" />
          <AuthForm.input control={form.control} name="password" label="비밀번호" />
          <AuthForm.input control={form.control} name="passwordCheck" label="비밀번호 확인" />
          <AuthForm.button type="submit" text="회원가입" />
        </AuthForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default SignUp;
