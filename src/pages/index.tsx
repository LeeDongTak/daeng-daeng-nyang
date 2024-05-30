import Home from '@/components/home/Home';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>댕댕냥 - 댕댕냥이 세상을 바꾼다!</title>
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="댕댕냥 - 댕댕냥이 세상을 구한다!!" />
        <meta
          name="description"
          content="반려동물에게 필요한 동물병원, 동물약국 그리고 산책로에대한 정보를 한 눈에 확인하고, 일정을 등록해보세요!"
        />
        <meta
          name="keywords"
          content="반려동물, 애완동물, 산책, 동물병원, 동물약국, 산책로, 댕댕냥이 세상을 구한다, "
        />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
export const getServerSideProps = (async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  // Pass data to the page via props
  return { props: { session: session } };
}) satisfies GetServerSideProps<{ session: Session | null }>;
