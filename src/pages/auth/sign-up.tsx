import SignUp from '@/components/auth/sign-up/SignUp';
import Head from 'next/head';

const CONTAINER_CSS = 'w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14 p-[50rem]';
const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>댕댕냥 - 회원가입</title>
      </Head>
      <div className={CONTAINER_CSS}>
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;
