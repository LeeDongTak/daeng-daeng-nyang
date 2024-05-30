import SignUp from '@/components/auth/sign-up/SignUp';
import Head from 'next/head';

const CONTAINER_CSS = 'w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14 p-[50rem]';
const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>회원가입 - 댕댕냥</title>
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="댕댕냥 - 댕댕냥이 세상을 구한다!!" />
        <meta name="description" content="다양한 서비스 이용을 위해 회원가입 후, 자신의 반려동물을 자랑해보세요!" />
        <meta name="keywords" content="로그인, 회원가입, 반려동물, 애완동물, 산책, 동물병원, 동물약국, 산책로," />
      </Head>
      <div className={CONTAINER_CSS}>
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;
