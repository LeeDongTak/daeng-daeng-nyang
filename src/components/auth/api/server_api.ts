import axios from 'axios';
import { signIn } from 'next-auth/react';
import { T_SignInSchema } from '../sign-in/validator/sign-in-validator';
import { T_SignUpSchema } from '../sign-up/validator/sign-up-validator';

export const signInWithCredentials = async (values: T_SignInSchema) => {
  // next auth method 인 signIn 함수를 사용하면 res안에 성공과 실패값이 조건부로 있다. e.g)  {error: '여기서 던져지나??', status: 401, ok: false, url: null}
  // 따라서 try {}, catch{}를 사용하는 것이아닌 if문을 통해 if (res.ok)등을 활용해서 에러 처리를 해줘야 한다.
  const res = await signIn('HTTPLogin', {
    ...values,
    redirect: false,
    callbackUrl: '/',
  });

  if (!res?.ok) throw res;
  return res;
};

export const signUp = async (values: T_SignUpSchema) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SIGN_UP_API_BASE_PATH}api/auth/signUp_API_Router`,
      values,
    );
    return data;
  } catch (err) {
    throw err;
  }
};
