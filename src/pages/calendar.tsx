import Calendar from '@/components/calendar/Calendar';
import { BIG_MODE } from '@/components/calendar/calendarType/calendarType';
import { processHoldayList } from '@/components/calendar/utility/formatHoliday';
import { setHolidayState } from '@/store/calendar/holiday-store';
import { HolidayType, HolidaysType } from '@/types/calendar/calendar';
import axios from 'axios';
import dayjs from 'dayjs';
import { GetStaticProps } from 'next';

export const getStaticProps = (async () => {
  const startYearOfHoliday = 2000;
  const holidayObject: { [key: string]: HolidayType[] } = {};

  // 2000년부터 2030년까지
  for (let i = 0; i <= 30; i++) {
    const holidayYear = dayjs().year(startYearOfHoliday).add(i, 'year').format('YYYY');
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOLIDAY_URL}/${holidayYear}`);
    const holidayList = processHoldayList(data, holidayYear);
    holidayObject[holidayYear] = holidayList;
  }

  return { props: { holidays: holidayObject } };
}) satisfies GetStaticProps<{
  holidays: HolidaysType;
}>;

const CalendarPage = ({ holidays }: { holidays: HolidaysType }) => {
  setHolidayState(holidays);
  return <Calendar mode={BIG_MODE} />;
};

export default CalendarPage;
