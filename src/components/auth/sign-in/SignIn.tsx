import { Card } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import AuthForm from '../form/AuthForm';
import FormBody from '../form/form-body/FormBody';
import FormHeader from '../form/form-header/FormHeader';
const formSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
});

type T_schema = z.infer<typeof formSchema>;
const SignIn = () => {
  const form = useForm<T_schema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(formSchema),
  });

  const submitHandler = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <Card>
        <FormHeader title="로그인" />
        <FormBody>
          <AuthForm onSubmit={form.handleSubmit(submitHandler)}>
            <AuthForm.input control={form.control} name="email" />
            <AuthForm.input control={form.control} name="password" />
            <AuthForm.button type="submit" text="button" />
          </AuthForm>
        </FormBody>
      </Card>
    </Form>
  );
};

export default SignIn;
