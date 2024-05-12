import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'HTTPLogin',
      name: 'CredentialsLogin',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials, req) {
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login', // next-auth에서 제공하는 폼 (api/auth/signin)에서 로그인 하는 것이 아닌 custom login하는 장소를 지정합니다.
  },
};

export default NextAuth(authOptions);
