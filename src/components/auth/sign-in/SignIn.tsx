import CustomInput from '@/components/common/form/CustomInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const formSchema = z.object({
  email: z.string().min(2),
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
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <CustomInput control={form.control} name="email" />
        <Button>submit</Button>
      </form>
    </Form>
  );
};

export default SignIn;
