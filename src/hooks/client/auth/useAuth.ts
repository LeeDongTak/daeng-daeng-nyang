import { T_SignInSchema } from '@/components/auth/sign-in/validator/sign-in-validator';
import { T_SignUpSchema } from '@/components/auth/sign-up/validator/sign-up-validator';
import useAuthQuery from '@/hooks/server/auth/uesAuthQuery';
import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

interface I_UseAuthProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: DefaultValues<T>;
}
const useAuth = <T extends FieldValues>({ schema, defaultValues }: I_UseAuthProps<T>) => {
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { signIn, signUp } = useAuthQuery({ form });

  const submitLoginHandler = (values: T_SignInSchema) => signIn(values);
  const submitSignUpHandler = (values: T_SignUpSchema) => signUp(values);

  return { form, submitLoginHandler, submitSignUpHandler };
};

export default useAuth;
