import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/client/ui/useModal';
import useScheduleMutationQuery from '@/hooks/server/calendar/useScheduleMutationQuery';
import useScheduleFormStore from '@/store/calendar/form-store';
import useSchedulePetStore from '@/store/calendar/pet-store';
import useScheduleListStore from '@/store/calendar/schedule-store';
import dayjs from 'dayjs';

const ModalSchedule = () => {
  const scheduleFormDateStore = useScheduleFormStore(state => state.date);
  const schedulePetData = useSchedulePetStore(state => state.schedulePetData);
  const scheduleListData = useScheduleListStore(state => state.scheduleListData);

  const { deleteSchedule } = useScheduleMutationQuery({});
  const { DaengModal } = useModal();

  const handleDelete = (id: number) => {
    DaengModal.confirm({
      content: '정말 삭제하시겠습니까?',
      cancelButtonText: '취소',
      confirmButtonText: '삭제',
      confirmButtonCallback: () => {
        deleteSchedule(id);
      },
    });
  };

  return (
    <div>
      {scheduleListData && scheduleListData.length > 0 ? (
        scheduleListData.map(item => (
          <div key={item.id}>
            <p>펫 이름: {schedulePetData?.find(map => map.value === item.petId.toString())?.label}</p>
            <p>카테고리: {item.category}</p>
            <p>{dayjs(item.date).format('YYYY-MM-DD HH:MM')}</p>
            <p>제목: {item.title}</p>
            <p>설명: {item.content}</p>
            <p>도로명: {item.place}</p>
            {item.location && <p>장소명: {item.location}</p>}
            <Button
              className="text-white"
              type="button"
              variant="delete"
              size="sm"
              onClick={() => handleDelete(item.id)}
            >
              삭제
            </Button>
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
