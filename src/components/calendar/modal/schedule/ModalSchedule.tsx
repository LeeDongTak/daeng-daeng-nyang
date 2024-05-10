import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/client/ui/useModal';
import useScheduleMutationQuery from '@/hooks/server/calendar/useScheduleMutationQuery';
import useSchedulePetStore from '@/store/calendar/pet-store';
import useScheduleListStore from '@/store/calendar/schedule-store';
import RegistCalendar from '../../form/RegistCalendar';

const ModalSchedule = () => {
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
            <p>글 아이디: {item.id}</p>
            <p>펫 이름: {schedulePetData?.find(map => map.value === item.petId.toString())?.label}</p>
            <p>카테고리: {item.category}</p>
            <p>
              {item.date.split('T')[0]} {item.date.split('T')[1].split(':')[0]}:{item.date.split('T')[1].split(':')[1]}
            </p>
            <p>제목: {item.title}</p>
            <p>설명: {item.content}</p>
            <p>장소: {item.place}</p>
            {item.location && <p>장소명: {item.location}</p>}
            <Button
              type="button"
              variant="update"
              size="sm"
              onClick={() => {
                DaengModal.fire(<RegistCalendar updateScheduleData={item} />);
              }}
            >
              수정
            </Button>
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
    </div>
  );
};

export default ModalSchedule;
