import { signIn, signUp } from '@/components/auth/api/server_api';
import { setAuthLogin } from '@/store/auth/auth-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface I_useAuthQueryProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const enum QUERY_KEY {
  LOGIN = 'signin',
  SIGNUP = 'signup',
}

const enum ROUTER_PATH {
  HOME = '/',
  AUTH = '/auth',
}

const useAuthQuery = <T extends FieldValues>({ form }: I_useAuthQueryProps<T>) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: res => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SIGNUP] });
      router.push(ROUTER_PATH.AUTH);
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
      router.push(ROUTER_PATH.HOME);
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

  return { signIn: signInMutaion.mutate, signUp: signUpMutation.mutate };
};

export default useAuthQuery;
