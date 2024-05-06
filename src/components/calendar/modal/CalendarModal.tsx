import { useModal } from '@/hooks/client/ui/useModal';
import { ScheduleDataType } from '@/types/calendar/calendar';
import ModalCalendarBody from './body/ModalCalendarBody';
import { ModalCalendarHeader } from './header/ModalCalendarHeader';

const CalendarModal = ({ scheduleData, modalId }: { scheduleData: ScheduleDataType[] | null; modalId?: string }) => {
  const { DaengModal } = useModal();

  const clickCloseModal = () => {
    DaengModal.hide(modalId ?? '');
  };
  return (
    <div className="relative p-8">
      <ModalCalendarHeader clickCloseModal={clickCloseModal} />
      <ModalCalendarBody scheduleData={scheduleData} />
    </div>
  );
};

export default CalendarModal;
