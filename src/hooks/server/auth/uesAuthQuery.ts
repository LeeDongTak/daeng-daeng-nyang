import { signInWithCredentials, signUp } from '@/components/auth/api/server_api';
import { I_AuthCallback, I_JSONError, I_SignInError } from '@/types/auth/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface I_useAuthQueryProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  callbackAuthFn: (param: I_AuthCallback) => void;
}

const enum QUERY_KEY {
  LOGIN = 'signin',
  SIGNUP = 'signup',
}

const enum ROUTER_PATH {
  LOGIN = '/auth/login',
}

const enum AUTH_TITLE {
  SIGNUP = '회원가입을 축하드립니다.',
  LOGIN = '로그인이 완료하였습니다.',
}

const useAuthQuery = <T extends FieldValues>({ form, callbackAuthFn }: I_useAuthQueryProps<T>) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: res => {
      console.log(res, '성공??');
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SIGNUP] });
      router.push(ROUTER_PATH.LOGIN);
      callbackAuthFn({ title: AUTH_TITLE.SIGNUP, path: ROUTER_PATH.LOGIN });
    },
    onError: error => {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error, 'isAxios');
        if (error.response.status === 400) {
          //400 status는 존재하는 이메일이라는 의미
          form.setError('email' as 'root', {
            message: '이미 존재하는 아이디 입니다.',
          });
        }
      }

      console.log(error);
    },
  });

  const signInMutaion = useMutation({
    mutationFn: signInWithCredentials,
    onSuccess: (res: SignInResponse) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LOGIN] });
      if (res.url) {
        callbackAuthFn({ title: AUTH_TITLE.LOGIN, path: res.url, variant: 'danger' });
      }
    },
    onError: ({ error }: I_SignInError) => {
      const parsedError = JSON.parse(error) as I_JSONError;

      if (parsedError.statusCode === 400) {
        form.setError('email' as 'root', {
          message: '이메일을 다시 확인해 주세요',
        });
      }

      if (parsedError.statusCode === 401) {
        form.setError('password' as 'root', {
          message: '비밀번호가 일치하지 않습니다.',
        });
      }
    },
  });

  return { signIn: signInMutaion.mutate, signUp: signUpMutation.mutate };
};

export default useAuthQuery;
