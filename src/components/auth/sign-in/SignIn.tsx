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
          <AuthForm.input control={form.control} name="email" />
          <AuthForm.input control={form.control} name="password" />
          <AuthForm.button type="submit" text="button" />
        </AuthForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default SignIn;