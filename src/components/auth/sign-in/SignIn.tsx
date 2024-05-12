import useAuth from '@/hooks/client/auth/useAuth';
import { SignInResponse, signIn } from 'next-auth/react';
import { Fragment } from 'react';
import LayoutForm from '../../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../../common/form/form-layout/layout-form-body/LayoutFormBody';
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
const DEFAULT_VALUES = {
  email: '',
  password: '',
};

const SignIn = () => {
  const { form, submitLoginHandler } = useAuth<T_SignInSchema>({
    schema: SignInSchema,
    defaultValues: DEFAULT_VALUES,
  });
  const test = async (value: T_SignInSchema) => {
    // next auth method 인 signIn 함수를 사용하면 res안에 성공과 실패값이 조건부로 있다. e.g)  {error: '여기서 던져지나??', status: 401, ok: false, url: null}
    // 따라서 try {}, catch{}를 사용하는 것이아닌 if문을 통해 if (res.ok)등을 활용해서 에러 처리를 해줘야 한다.

    const res = (await signIn('HTTPLogin', {
      ...value,
      redirect: false,
      // callbackUrl:'res에 반환되는 url입니다.'
    })) as SignInResponse;
  };
  return (
    <Fragment>
      <AuthTitle title="Login" subTitle="나의 반려동물을 자랑해보세요" />
      <LayoutForm form={form} className="w-[33.2rem] bg-transparent border-0 shadow-none">
        <LayoutFormBody>
          <AuthForm onSubmit={form.handleSubmit(test)} className="flex flex-col gap-10">
            {SIGN_IN_INPUTS.map(input => (
              <AuthForm.input {...STYLE_CSS.input} control={form.control} {...input} />
            ))}
            <AuthForm.button type="submit" {...STYLE_CSS.button} variant={'auth'}>
              로그인
            </AuthForm.button>
            <AccountManagement />
          </AuthForm>
        </LayoutFormBody>
      </LayoutForm>
    </Fragment>
  );
};

export default SignIn;
