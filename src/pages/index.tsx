import Home from '@/components/home/Home';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

const HomePage = () => <Home />;

export default HomePage;
export const getServerSideProps = (async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  // Pass data to the page via props
  return { props: { session: session } };
}) satisfies GetServerSideProps<{ session: Session | null }>;
