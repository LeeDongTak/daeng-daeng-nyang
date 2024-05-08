import useScheduleFormStore from '@/store/calendar/form-store';
import { ScheduleDataType } from '@/types/calendar/calendar';

const ModalSchedule = ({ scheduleData }: { scheduleData: ScheduleDataType[] | null }) => {
  const scheduleFormDateStore = useScheduleFormStore(state => state.date);
  return (
    <div>
      {scheduleData && scheduleData.length > 0 ? (
        scheduleData.map(item => (
          <div key={item.id}>
            <div>{item.title}</div>
          </div>
        ))
      ) : (
        <div>예약이 없습니다</div>
      )}

      <div>날짜 : {scheduleFormDateStore}</div>
    </div>
  );
};

export default ModalSchedule;
