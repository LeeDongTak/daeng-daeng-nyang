import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/client/ui/useModal';
import RegistCalendar from '../../form/RegistCalendar';
import ModalSchedule from '../schedule/ModalSchedule';

const ModalCalendarBody = () => {
  const { DaengModal } = useModal();

  return (
    <div>
      <ModalSchedule />
      <Button
        className="w-full mt-2"
        type="button"
        onClick={() => {
          DaengModal.fire(<RegistCalendar />);
        }}
      >
        스케줄 추가
      </Button>
    </div>
  );
};

export default ModalCalendarBody;
