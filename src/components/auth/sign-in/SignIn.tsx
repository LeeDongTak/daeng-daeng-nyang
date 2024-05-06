import { setAuthLogin } from '@/store/auth/auth-store';
import { I_AuthProps } from '@/types/auth/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import LayoutForm from '../../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../../common/form/form-layout/layout-form-body/LayoutFormBody';
import { axiosApi } from '../api/server_api';
import AuthForm from '../auth-form/AuthForm';
import AuthTitle from '../auth-title/AuthTitle';
import AccountManagement from './account-management/AccountManagement';
import { SIGN_IN_INPUTS, SignInSchema, T_SignInSchema } from './validator/sign-in-validator';
const STYLE_CSS = {
  button: { className: 'rounded-full py-8 text-2xl tracking-widest hover:bg-destructive/30 bg-[#E1E6EC] ' },
  input: {
    labelCn: 'text-xl font-bold',
    className: 'h-[4.8rem] text-xl rounded-2xl pl-7',
    messageCn: 'text-lg',
  },
};

const SignIn = ({ clickChangeCom }: I_AuthProps) => {
  const router = useRouter();
  const form = useForm<T_SignInSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignInSchema),
  });

  const submitHandler = async (values: T_SignInSchema) => {
    try {
      const {
        data: { accessToken, refreshToken },
      } = await axiosApi.post('/auth/sign-in', values);
      // 로그인성공시 zustand로 session에 등록합니다.
      setAuthLogin({ accessToken, refreshToken, isLogin: true });
      router.push('/');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const { status } = err.response;

        if (status === 400)
          form.setError('email', {
            message: '이메일을 다시 확인해 주세요',
          });
        if (status === 401)
          form.setError('password', {
            message: '비밀번호가 일치하지 않습니다.',
          });
      }
    }
  };

  return (
    <Fragment>
      <AuthTitle title="Login" subTitle="나의 반려동물을 자랑해보세요" />
      <LayoutForm form={form} className="w-[33.2rem] bg-transparent border-0 shadow-none">
        <LayoutFormBody>
          <AuthForm onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-10">
            {SIGN_IN_INPUTS.map(input => (
              <AuthForm.input {...STYLE_CSS.input} control={form.control} {...input} />
            ))}
            <AuthForm.button type="submit" {...STYLE_CSS.button} variant={'auth'}>
              로그인
            </AuthForm.button>
            <AccountManagement clickChangeCom={clickChangeCom} />
          </AuthForm>
        </LayoutFormBody>
      </LayoutForm>
    </Fragment>
  );
};

export default SignIn;
