import { T_SignInSchema } from '@/components/auth/sign-in/validator/sign-in-validator';
import { T_SignUpSchema } from '@/components/auth/sign-up/validator/sign-up-validator';
import useAuthQuery from '@/hooks/server/auth/uesAuthQuery';
import { I_AuthCallback } from '@/types/auth/auth';
import { I_CustomUseHookFormProps } from '@/types/form/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { FieldValues, useForm } from 'react-hook-form';
import useToast from '../useToast';

const useAuth = <T extends FieldValues>({ schema, defaultValues }: I_CustomUseHookFormProps<T>) => {
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { toast } = useToast();
  const { push } = useRouter();

  const callbackAuthFn = ({ title, path, variant = 'success', position = 'top-right' }: I_AuthCallback) => {
    toast({
      title,
      variant,
      position,
      closeTimeOut: 2000,
    });
    push(path);
  };
  const { signIn, signUp } = useAuthQuery<T>({ form, callbackAuthFn });

  const submitLoginHandler = (values: T_SignInSchema) => signIn(values);
  const submitSignUpHandler = (values: T_SignUpSchema) => signUp(values);

  return { form, submitLoginHandler, submitSignUpHandler };
};

export default useAuth;
