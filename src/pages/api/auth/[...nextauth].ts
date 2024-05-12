import { axiosAPI } from '@/api/common/axios_instance';
import { T_SignInSchema } from '@/components/auth/sign-in/validator/sign-in-validator';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'HTTPLogin', // auth/sign-in pages에서 사용될 signIn('HTTPLogin',value)
      name: 'CredentialsLogin',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as T_SignInSchema;

        const result = await axiosAPI.post('/auth/sign-in', {
          email,
          password,
        });
        console.log(result.data, '???????????????????????');
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login', // next-auth에서 제공하는 폼 (api/auth/signin)에서 로그인 하는 것이 아닌 custom login하는 장소를 지정합니다.
  },
};

export default NextAuth(authOptions);
