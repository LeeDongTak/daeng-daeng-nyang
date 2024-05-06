import { Button } from '@/components/ui/button';
import { I_AuthProps } from '@/types/auth/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import LayoutForm from '../../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../../common/form/form-layout/layout-form-body/LayoutFormBody';
import { axiosApi } from '../api/server_api';
import AuthForm from '../auth-form/AuthForm';
import AuthTitle from '../auth-title/AuthTitle';
import { SIGN_UP_INPUTS, T_SignUpSchema, signUpSchema } from './validator/sign-up-validator';
const STYLE_CSS = {
  button: { className: 'rounded-full py-8 text-2xl tracking-widest hover:bg-destructive/30 bg-[#E1E6EC] ' },
  input: {
    labelCn: 'text-xl font-bold',
    className: 'h-[4.8rem] text-xl rounded-2xl pl-7',
    messageCn: 'text-lg',
  },
};
const SignUp = ({ clickChangeCom }: I_AuthProps) => {
  const form = useForm<T_SignUpSchema>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
    resolver: zodResolver(signUpSchema),
  });
  const submitHandler = async (values: T_SignUpSchema) => {
    const { data } = await axiosApi.post('/auth/signup', values);
    console.log('🚀 ~ submitHandler ~ data:', data);
    console.log(values);
  };
  return (
    <Fragment>
      <AuthTitle title="Sign up" subTitle="회원 가입으로 더 많은 혜택을 누려보세요" />
      <LayoutForm form={form} className="w-[33.2rem] bg-transparent border-0 shadow-none">
        <LayoutFormBody>
          <AuthForm onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-10">
            {SIGN_UP_INPUTS.map(input => (
              <AuthForm.input {...STYLE_CSS.input} control={form.control} {...input} />
            ))}
            <AuthForm.button type="submit" {...STYLE_CSS.button} variant={'jumbotron'}>
              회원가입
            </AuthForm.button>
            <div className="flex justify-end">
              <Button variant={'auth'} className="text-xl" type="button" onClick={() => clickChangeCom(false)}>
                로그인으로 이동
              </Button>
            </div>
          </AuthForm>
        </LayoutFormBody>
      </LayoutForm>
    </Fragment>
  );
};

export default SignUp;
