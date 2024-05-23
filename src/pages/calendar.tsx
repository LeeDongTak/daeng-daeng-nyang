import Calendar from '@/components/calendar/Calendar';
import Head from 'next/head';

const CalendarPage = () => {
  return (
    <>
      <Head>
        <title>댕댕냥 - 캘린더</title>
      </Head>
      <Calendar />
    </>
  );
};

export default CalendarPage;
