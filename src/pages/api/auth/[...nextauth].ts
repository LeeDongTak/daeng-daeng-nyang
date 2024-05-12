import { axiosAPI } from '@/api/common/axios_instance';
import { T_SignInSchema } from '@/components/auth/sign-in/validator/sign-in-validator';
import { AxiosError } from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'HTTPLogin', // auth/sign-in pages에서 사용될 signIn('HTTPLogin',value) /id를 써주지 않으면 default로 credentials 입니다. id가 없으면 (signIn('credentials',...))
      name: 'CredentialsLogin',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials, request) {
        const { email, password } = credentials as T_SignInSchema;
        try {
          const { data } = await axiosAPI.post(`/auth/sign-in`, {
            email,
            password,
          });
          return data;
        } catch (err) {
          // error를 던져도 / next-auth의 signIn에서 return 값은
          /**
             *  interface SignInResponse {
                  error: string | null
                  status: number
                  ok: boolean
                  url: string | null
                  }
                  정의가 되어있어서 이메일, 비번에 따른 에러 분기 처리를 해주려면 stringfy로 에러를 던줘줘야함 (status는 항상 401이다. )
             */
          if (err instanceof AxiosError) {
            throw new Error(JSON.stringify(err.response?.data));
          }
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: '/auth/login', // next-auth에서 제공하는 폼 (http//localhost:3000/api/auth/signin)에서 로그인 하는 것이 아닌 custom login하는 장소를 지정합니다.
  },
} satisfies NextAuthOptions; // 타입 추론 가능하게 하기 위해서

export default NextAuth(authOptions);
