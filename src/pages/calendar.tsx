import { getAuthorizedAxios } from '@/api/common/axios_instance';
import Calendar from '@/components/calendar/Calendar';
import { QueryClient, dehydrate, useQueryClient } from '@tanstack/react-query';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';

const CalendarPage = () => {
  // 미리 받아온 데이터값이 들어있습니다.
  const data = useQueryClient().getQueryData(['sample']);
  console.log('🚀 ~ CalendarPage ~ data:', data); // 확인해보셔요
  return (
    <>
      <Head>
        <title>댕댕냥 - 캘린더 </title>
      </Head>
      <Calendar />
    </>
  );
};

export default CalendarPage;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();
  // accessToken, refreshToken을 탑재한 axios instance 입니다.
  const axiosInstance = await getAuthorizedAxios(ctx);
  if (axiosInstance)
    try {
      await queryClient.prefetchQuery({
        // 본인이 사용할 페이지에서 SSR로 불러오고 싶은 queryKey를 넣어주세요,
        queryKey: ['sample'],
        queryFn: async () => {
          const { data } = await axiosInstance.get('post/all/1');
          return data;
        },
      });
    } catch (err) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

  if (!axiosInstance)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  return { props: { dehydratedState: dehydrate(queryClient) } };
};
