import SignIn from '@/components/auth/sign-in/SignIn';
import Head from 'next/head';
const CONTAINER_CSS = 'w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14 p-[50rem]';
const LoginPage = () => {
  return (
    <>
      <Head>
        <title>댕댕냥 - 로그인</title>
      </Head>
      <div className={CONTAINER_CSS}>
        <SignIn />
      </div>
    </>
  );
};

export default LoginPage;
