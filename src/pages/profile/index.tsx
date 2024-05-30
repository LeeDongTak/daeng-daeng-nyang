import Profile from '@/components/profile/Profile';
import Head from 'next/head';

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>마이페이지 - 댕댕냥</title>
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="마이페이지 - 댕댕냥이 세상을 구한다!!" />
        <meta name="description" content="자신의 일정을 확인해보세요. " />
        <meta name="keywords" content="일정, 애완동물, 산책, 동물병원, 동물약국, 산책로, 반려동물 추가, 펫" />
      </Head>
      <Profile />
    </>
  );
};

export default ProfilePage;
