import Calendar from '@/components/calendar/Calendar';
import { setCalendarBindingData } from '@/store/calendar/data-store';
import { CalendarDataType } from '@/types/calendar/calendar';
import axios from 'axios';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  const { data: schedule } = await axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/schedule`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE0OTI3NjU4LCJleHAiOjE3MTQ5Mjc5NTh9.n2WbwEJTz80uOBXmVZ3lzVAZNSQxZ_glEUj6Yg2Kmvs`,
      refreshtoken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQ5Mjc2NTgsImV4cCI6MTcxNTUzMjQ1OH0.KP2pUSNwbKAyCJppsWUVnZ_QHHM5EQqqf5x8w6eP_Xs',
    },
  });

  console.log(schedule, '테스트 중');

  return {
    props: {
      schedule,
    },
  };
};

const CalendarPage = ({ schedule }: { schedule: CalendarDataType[] }) => {
  setCalendarBindingData(schedule);
  return <Calendar />;
};

export default CalendarPage;
