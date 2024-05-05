import CalendarBody from './calendar-body/CalendarBody';
import CalendarTitle from './calendar-title/CalendarTitle';
import { BIG_MODE, MINI_MODE } from './calendar-type/calendarType';

const Calendar = () => {
  return (
    <div className="w-[100%] max-w-[128rem] py-[8rem] mx-auto">
      <CalendarTitle />
      <div className="flex gap-6">
        <CalendarBody mode={MINI_MODE} />
        <CalendarBody mode={BIG_MODE} />
      </div>
    </div>
  );
};

export default Calendar;
