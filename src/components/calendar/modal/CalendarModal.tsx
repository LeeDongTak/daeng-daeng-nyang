import { useModal } from '@/hooks/client/ui/useModal';
import ModalCalendarBody from './body/ModalCalendarBody';
import { ModalCalendarHeader } from './header/ModalCalendarHeader';

const CalendarModal = ({ modalId }: { modalId?: string }) => {
  const { DaengModal } = useModal();

  const clickCloseModal = () => {
    DaengModal.hide(modalId ?? '');
  };
  return (
    <div className="relative p-8">
      <ModalCalendarHeader clickCloseModal={clickCloseModal} />
      <ModalCalendarBody />
    </div>
  );
};

export default CalendarModal;
