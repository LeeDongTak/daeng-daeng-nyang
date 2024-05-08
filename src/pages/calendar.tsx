import Calendar from '@/components/calendar/Calendar';
import { setCalendarBindingData } from '@/store/calendar/data-store';
import { CalendarDataType } from '@/types/calendar/calendar';
import axios from 'axios';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  const { data: schedule } = await axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/schedule`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE1MDA4NDM0LCJleHAiOjE3MTUwMDg3MzR9.kVC6jNctz4bG2rxlhl5HBH5uCFiLJ-fvYBlNkqQAvXA`,
      refreshtoken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTUwMDg0MzQsImV4cCI6MTcxNTYxMzIzNH0.lKZRDQ0_KB_2l_sK3BltsUdHaDYjdOVtDRUwtH18N7E',
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
