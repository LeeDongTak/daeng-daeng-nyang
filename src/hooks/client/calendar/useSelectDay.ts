import { setCalendarCurrentDate } from '@/store/calendar/calendar-store';
import { setSelectedDate } from '@/store/calendar/day-store';
import { Dayjs } from 'dayjs';

const useSelectDay = () => {
  const selectDayHandler = (day: Dayjs) => () => {
    setSelectedDate(day);
    setCalendarCurrentDate(day);
  };

  return { selectDayHandler };
};

export default useSelectDay;
