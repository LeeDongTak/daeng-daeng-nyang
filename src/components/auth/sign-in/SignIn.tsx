import { I_AuthProps } from '@/types/auth/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import LayoutForm from '../../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../../common/form/form-layout/layout-form-body/LayoutFormBody';
import AuthForm from '../auth-form/AuthForm';
import AuthTitle from '../auth-title/AuthTitle';
import AccountManagement from './account-management/AccountManagement';
import { SIGN_IN_INPUTS, SignInSchema, T_SignInSchema } from './validator/sign-in-validator';

const SignIn = ({ clickChangeCom }: I_AuthProps) => {
  const form = useForm<T_SignInSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignInSchema),
  });

  const submitHandler = (values: T_SignInSchema) => {
    console.log(values);
  };
  return (
    <Fragment>
      <AuthTitle title="Login" subTitle="나의 반려동물을 자랑해보세요" />
      <LayoutForm form={form} className="w-[33.2rem] bg-transparent border-0 shadow-none">
        <LayoutFormBody>
          <AuthForm onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-10">
            {SIGN_IN_INPUTS.map(input => (
              <AuthForm.input
                control={form.control}
                labelCn="text-xl font-bold"
                className="h-[4.8rem] text-xl rounded-2xl pl-7"
                name={input.name}
                label={input.label}
                placeholder={input.placeholder}
              />
            ))}
            <AuthForm.button
              type="submit"
              className="rounded-full py-8 text-2xl tracking-widest hover:bg-destructive/30 bg-[#E1E6EC] "
              variant={'auth'}
            >
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
