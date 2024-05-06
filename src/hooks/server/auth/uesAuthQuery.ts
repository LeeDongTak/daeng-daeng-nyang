import { signIn, signUp } from '@/components/auth/api/server_api';
import { T_SignInSchema } from '@/components/auth/sign-in/validator/sign-in-validator';
import { T_SignUpSchema } from '@/components/auth/sign-up/validator/sign-up-validator';
import { setAuthLogin } from '@/store/auth/auth-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { DefaultValues, FieldValues, Path, useForm } from 'react-hook-form';
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
const AUTH = '/auth';

const useAuthQuery = <T extends FieldValues>({ schema, defaultValues }: I_useAuthQueryProps<T>) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: res => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SIGNUP] });
      router.push(AUTH);
    },
    onError: error => {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          //400 status는 존재하는 이메일이라는 의미
          form.setError('email' as 'root', {
            message: '이미 존재하는 아이디 입니다.',
          });
          form.resetField('email' as Path<T>);
        }
      }
    },
  });

  const signInMutaion = useMutation({
    mutationFn: signIn,
    onSuccess: res => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LOGIN] });
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

  const submitSignUpHandler = (values: T_SignUpSchema) => signUpMutation.mutate(values);

  return { form, submitLoginHandler, submitSignUpHandler };
};

export default useAuthQuery;
