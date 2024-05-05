import useCalendarState from '@/store/calendar/calendar-store';
import { CalendarModeType } from '@/types/calendar/calendar';
import { MONTH_FORMAT_TYPE, YEAR_FORMAT_TYPE } from '../../calendar-type/calendarType';

const HeaderDate = ({ mode }: { mode: CalendarModeType }) => {
  const currentDate = useCalendarState(state => state.currentDate);

  return (
    <span className="">
      {currentDate.format(MONTH_FORMAT_TYPE)} {currentDate.format(YEAR_FORMAT_TYPE)}
    </span>
  );
};

export default HeaderDate;
