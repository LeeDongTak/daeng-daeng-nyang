import SignIn from '@/components/auth/sign-in/SignIn';
import Head from 'next/head';
const CONTAINER_CSS = 'w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14 p-[50rem]';
const LoginPage = () => {
  return (
    <>
      <Head>
        <title>로그인 - 댕댕냥</title>
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="댕댕냥 - 댕댕냥이 세상을 구한다!!" />
        <meta name="description" content="더욱더 많은 서비스 이용을 위해 로그인 하세요!" />
        <meta name="keywords" content="로그인, 회원가입, 반려동물, 애완동물, 산책, 동물병원, 동물약국, 산책로," />
      </Head>
      <div className={CONTAINER_CSS}>
        <SignIn />
      </div>
    </>
  );
};

export default LoginPage;
