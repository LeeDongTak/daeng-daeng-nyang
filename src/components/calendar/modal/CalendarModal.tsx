import { useModal } from '@/hooks/client/ui/useModal';
import ModalCalendarBody from './body/ModalCalendarBody';
import { ModalCalendarFooter } from './footer/ModalCalendarFooter';
import { ModalCalendarHeader } from './header/ModalCalendarHeader';

const CalendarModal = ({ modalId }: { modalId?: string }) => {
  const { DaengModal } = useModal();

  const clickCloseModal = () => {
    DaengModal.hide(modalId ?? '');
  };
  return (
    <div className="p-8">
      <ModalCalendarHeader clickCloseModal={clickCloseModal} />
      <ModalCalendarBody />
      <ModalCalendarFooter clickCloseModal={clickCloseModal} />
    </div>
  );
};

export default CalendarModal;
