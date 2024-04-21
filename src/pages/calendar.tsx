import Calendar from '@/components/calendar/Calendar';
import { BIG_MODE, MINI_MODE } from '@/components/calendar/calendarType/calendarType';

const CalendarPage = () => {
  return (
    <div>
      <div>
        <button type="button">오늘</button>
        <Calendar mode={MINI_MODE} />
      </div>
      <div>
        <Calendar mode={BIG_MODE} />
      </div>
    </div>
  );
};

export default CalendarPage;
