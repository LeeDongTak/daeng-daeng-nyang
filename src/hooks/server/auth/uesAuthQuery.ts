import { submitSignInHandler } from '@/components/auth/api/server_api';
import { T_SignInSchema } from '@/components/auth/sign-in/validator/sign-in-validator';
import { setAuthLogin } from '@/store/auth/auth-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

interface I_useAuthQueryProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: DefaultValues<T>;
}

const enum QUERY_KEY {
  LOGIN = 'signin',
  SIGNUP = 'signup',
  LOGOUT = 'logout',
}

const HOME = '/';

const useAuthQuery = <T extends FieldValues>({ schema, defaultValues }: I_useAuthQueryProps<T>) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const signInMutaion = useMutation({
    mutationFn: submitSignInHandler,
    onSuccess: res => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SIGNUP] });
      const { accessToken, refreshToken } = res;
      setAuthLogin({ accessToken, refreshToken, isLogin: true });
      router.push(HOME);
    },
    onError: error => {
      if (axios.isAxiosError(error) && error.response) {
        const { status } = error.response;

        if (status === 400)
          form.setError('email' as 'root', {
            message: '이메일을 다시 확인해 주세요',
          });
        if (status === 401)
          form.setError('password' as 'root', {
            message: '비밀번호가 일치하지 않습니다.',
          });
      }
    },
  });

  const submitLoginHandler = (values: T_SignInSchema) => signInMutaion.mutate(values);

  return { form, submitLoginHandler };
};

export default useAuthQuery;
