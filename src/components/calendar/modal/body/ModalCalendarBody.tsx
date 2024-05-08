import { ScheduleDataType } from '@/types/calendar/calendar';
import RegistCalendar from '../../form/RegistCalendar';
import ModalSchedule from '../schedule/ModalSchedule';

const ModalCalendarBody = ({ scheduleData }: { scheduleData: ScheduleDataType[] | null }) => {
  return (
    <div>
      <ModalSchedule scheduleData={scheduleData} />
      <RegistCalendar />
    </div>
  );
};

export default ModalCalendarBody;
