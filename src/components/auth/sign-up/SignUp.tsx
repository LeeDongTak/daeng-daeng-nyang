import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/client/auth/useAuth';
import { I_AuthProps } from '@/types/auth/auth';
import { Fragment } from 'react';
import LayoutForm from '../../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../../common/form/form-layout/layout-form-body/LayoutFormBody';
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
const DEFAULT_VALUE = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
};
const SignUp = ({ clickChangeCom }: I_AuthProps) => {
  const { form, submitSignUpHandler } = useAuth<T_SignUpSchema>({
    schema: signUpSchema,
    defaultValues: DEFAULT_VALUE,
  });

  return (
    <Fragment>
      <AuthTitle title="Sign up" subTitle="회원 가입으로 더 많은 혜택을 누려보세요" />
      <LayoutForm form={form} className="w-[33.2rem] bg-transparent border-0 shadow-none">
        <LayoutFormBody>
          <AuthForm onSubmit={form.handleSubmit(submitSignUpHandler)} className="flex flex-col gap-10">
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
