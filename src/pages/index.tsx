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
