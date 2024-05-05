import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import LayoutForm from '../../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../../common/form/form-layout/layout-form-body/LayoutFormBody';
import AuthForm from '../auth-form/AuthForm';
import AuthTitle from '../auth-title/AuthTitle';

const formSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
  passwordCheck: z.string().min(2),
  nickName: z.string().min(2),
});

type T_Schema = z.infer<typeof formSchema>;
const SignUp = () => {
  const form = useForm<T_Schema>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
      nickName: '',
    },
    resolver: zodResolver(formSchema),
  });
  const submitHandler = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Fragment>
      <AuthTitle title="Sign up" subTitle="회원 가입으로 더 많은 혜택을 누려보세요" />
      <LayoutForm form={form} className="w-[33.2rem] bg-transparent border-0 shadow-none">
        <LayoutFormBody>
          <AuthForm onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-10">
            <AuthForm.input
              className="h-[4.8rem] text-xl rounded-2xl pl-7"
              labelCn="text-xl font-bold"
              control={form.control}
              name="email"
              label="이메일"
              placeholder="이메일을 입력해 주세요."
            />
            <AuthForm.input
              className="h-[4.8rem] text-xl rounded-2xl pl-7"
              labelCn="text-xl font-bold"
              control={form.control}
              name="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
            />
            <AuthForm.input
              className="h-[4.8rem] text-xl rounded-2xl pl-7"
              labelCn="text-xl font-bold"
              control={form.control}
              name="passwordCheck"
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 한번 더 입력해주세요"
            />
            <AuthForm.input
              className="h-[4.8rem] text-xl rounded-2xl pl-7"
              labelCn="text-xl font-bold"
              control={form.control}
              name="nickName"
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
            />
            <AuthForm.button
              type="submit"
              className="rounded-full py-8 text-2xl tracking-widest hover:bg-destructive/30 bg-[#E1E6EC] "
              variant={'jumbotron'}
            >
              회원가입
            </AuthForm.button>
            <div className="flex justify-end">
              <Button variant={'auth'} className="text-xl" type="button">
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
