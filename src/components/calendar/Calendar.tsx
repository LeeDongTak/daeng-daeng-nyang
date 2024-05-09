import { useCalendar } from '@/hooks/client/calendar/useCalendar';
import useFetchCalendarQuery from '@/hooks/server/calendar/useFetchCalendarQuery';
import { setCalendarBindingData } from '@/store/calendar/data-store';
import { setSchedulePetData } from '@/store/calendar/pet-store';
import { useEffect } from 'react';
import CalendarBody from './calendar-body/CalendarBody';
import CalendarTitle from './calendar-title/CalendarTitle';
import { BIG_MODE, MINI_MODE } from './calendar-type/calendarType';

const Calendar = () => {
  const { data: schedule } = useFetchCalendarQuery();
  const { updateScheduleModal } = useCalendar();

  useEffect(() => {
    if (!schedule) return;
    setCalendarBindingData(schedule);
    setSchedulePetData(schedule);
    updateScheduleModal(schedule);
  }, [schedule]);

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
