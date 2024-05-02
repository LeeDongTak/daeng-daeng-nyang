import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../../common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '../../common/form/form-layout/layout-form-header/LayoutFormHeader';
import AuthForm from '../auth-form/AuthForm';
const formSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
});

type T_schema = z.infer<typeof formSchema>;
const SignIn = () => {
  const form = useForm<T_schema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const submitHandler = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <LayoutForm form={form}>
      <LayoutFormHeader title="로그인" />
      <LayoutFormBody>
        <AuthForm onSubmit={form.handleSubmit(submitHandler)}>
          <AuthForm.input control={form.control} name="email" label="이메일" />
          <AuthForm.input control={form.control} name="password" label="비밀번호" />
          <AuthForm.button type="submit">Button</AuthForm.button>
        </AuthForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default SignIn;
