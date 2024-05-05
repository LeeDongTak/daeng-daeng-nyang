import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import LayoutForm from '../../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../../common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '../../common/form/form-layout/layout-form-header/LayoutFormHeader';
import AuthForm from '../auth-form/AuthForm';
import AuthTitle from '../auth-title/AuthTitle';
import { SignInSchema, T_SignInSchema } from './validator/sign-in-validator';

const SignIn = () => {
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
        <LayoutFormHeader title="" />
        <LayoutFormBody>
          <AuthForm onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-10">
            <AuthForm.input
              labelCn="text-xl font-bold"
              placeholder="아이디를 입력해 주세요."
              control={form.control}
              name="email"
              label="이메일"
              className="h-[4.8rem] text-xl rounded-2xl pl-7"
            />
            <AuthForm.input
              labelCn="text-xl font-bold"
              control={form.control}
              name="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              className="h-[4.8rem] text-xl rounded-2xl pl-7"
              type="password"
            />

            <AuthForm.button
              type="submit"
              className="rounded-full py-8 text-2xl tracking-widest hover:bg-destructive/30 bg-[#E1E6EC] "
              variant={'auth'}
            >
              로그인
            </AuthForm.button>
            <div className="flex justify-between items-center">
              <div className="flex item-center gap-5">
                <Checkbox id="keep-login" className=" w-[1.4rem] h-[1.4rem] rounded-full" />
                <Label htmlFor="keep-login" className="text-xl cursor-pointer">
                  로그인 상태 유지
                </Label>
              </div>
              <Button variant={'link'} className="text-xl " type="button">
                회원가입하기
              </Button>
            </div>
          </AuthForm>
        </LayoutFormBody>
      </LayoutForm>
    </Fragment>
  );
};

export default SignIn;
