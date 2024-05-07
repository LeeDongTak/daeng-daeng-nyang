import { T_SignInSchema } from '@/components/auth/sign-in/validator/sign-in-validator';
import { T_SignUpSchema } from '@/components/auth/sign-up/validator/sign-up-validator';
import useAuthQuery from '@/hooks/server/auth/uesAuthQuery';
import { I_CustomUseHookFormProps } from '@/types/form/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

const useAuth = <T extends FieldValues>({ schema, defaultValues }: I_CustomUseHookFormProps<T>) => {
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
