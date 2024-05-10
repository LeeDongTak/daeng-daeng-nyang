import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/client/ui/useModal';
import useToast from '@/hooks/client/useToast';
import useScheduleListStore from '@/store/calendar/schedule-store';
import RegistCalendar from '../../form/RegistCalendar';
import ModalSchedule from '../schedule/ModalSchedule';

const ModalCalendarBody = () => {
  const { toast } = useToast();
  const { DaengModal } = useModal();
  const scheduleListData = useScheduleListStore(state => state.scheduleListData);
  return (
    <div>
      <ModalSchedule />
      <Button
        className="w-full mt-2"
        type="button"
        onClick={() => {
          if (scheduleListData.length > 4) {
            toast({
              title: '하루에 일정 최대 갯수는 5개입니다.',
              variant: 'danger',
              position: 'top-center',
              closeTimeOut: 2000,
            });
            return;
          }
          DaengModal.fire(<RegistCalendar />);
        }}
      >
        스케줄 추가
      </Button>
    </div>
  );
};

export default ModalCalendarBody;
