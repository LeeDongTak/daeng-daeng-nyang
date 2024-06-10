import { getAuthorizedAxios } from '@/api/common/axios_instance';
import Calendar from '@/components/calendar/Calendar';
import { useCalendar } from '@/hooks/client/calendar/useCalendar';
import { setCalendarBindingData } from '@/store/calendar/data-store';
import { setSchedulePetData } from '@/store/calendar/pet-store';
import { CalendarDataType } from '@/types/calendar/calendar';
import { QueryClient, dehydrate, useQueryClient } from '@tanstack/react-query';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const CalendarPage = () => {
  const queryClient = useQueryClient();
  const schedule = queryClient.getQueryData<CalendarDataType[]>(['SCHEDULE_QUERY']);
  console.log('🚀 ~ CalendarPage ~ data:', schedule);
  const { updateScheduleModal } = useCalendar();

  useEffect(() => {
    if (!schedule) return;

    setCalendarBindingData(schedule);
    setSchedulePetData(schedule);
    updateScheduleModal(schedule);
  }, [schedule]);

  return (
    <>
      <Head>
        <title>일정등록 - 댕댕냥</title>
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="일정등록 - 댕댕냥이 세상을 구한다!!" />
        <meta name="description" content="반려동물과 함께 일정을 등록하세요!" />
        <meta name="keywords" content="달력, 반려동물, 애완동물, 산책, 동물병원, 동물약국, 산책로, 일정등록" />
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
        queryKey: ['SCHEDULE_QUERY'],
        queryFn: async () => {
          const { data } = await axiosInstance.get('schedule');
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
