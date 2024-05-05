import Calendar from '@/components/calendar/Calendar';
import axios from 'axios';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  const { data: schedule } = await axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/schedule`, {
    headers: {
      Authorization: `Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0Mjc1MzcyLCJleHAiOjE3MTQyNzU2NzJ9.LrdiUu6DtqLfQachtUSv_igSbJ8IKwTzZpYy_j17lyg`,
      refreshtoken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQyNzUzNzIsImV4cCI6MTcxNDg4MDE3Mn0.cd1feJoKUj2Iep4mOO5hFNmpunudamxGmlN4wkZvyMk',
    },
  });

  console.log(schedule, '테스트 중');

  return {
    props: {
      schedule,
    },
  };
};

const CalendarPage = () => {
  return <Calendar />;
};

export default CalendarPage;
