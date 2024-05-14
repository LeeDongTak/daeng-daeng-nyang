import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/client/ui/useModal';
import useScheduleMutationQuery from '@/hooks/server/calendar/useScheduleMutationQuery';
import { cn } from '@/lib/utils';
import useSchedulePetStore from '@/store/calendar/pet-store';
import useScheduleListStore from '@/store/calendar/schedule-store';
import RegistCalendar from '../../form/RegistCalendar';
import { CALENDAR_CATEGORY } from '../../reservation/reservation-type';

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
    <div
      className="flex flex-col gap-4 h-auto max-h-[20rem] overflow-y-auto scrollbar-thin scrollbar-w-4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
    scrollbar-track-[#ccc] scrollbar-thumb-[#191919] scroll-[100rem] px-2"
    >
      {scheduleListData && scheduleListData.length > 0 ? (
        scheduleListData.map(item => (
          <div key={item.id} className="relative pt-5 border-t first:border-t-0">
            <p className="flex gap-2 items-center">
              {CALENDAR_CATEGORY.filter(category => category.value === item.category).map(pickCategory => {
                return (
                  <span className={cn('text-white rounded-full py-1 px-2', pickCategory.color)}>
                    {pickCategory.label}
                  </span>
                );
              })}
              <span className="font-semibold text-[1.4rem] ">
                {schedulePetData?.find(map => map.value === item.petId.toString())?.label}
              </span>
            </p>
            <p className="text-[1.2rem] text-gray-500">
              {item.date.split('T')[0]} {item.date.split('T')[1].split(':')[0]}:{item.date.split('T')[1].split(':')[1]}
            </p>
            <p className="text-[1.6rem] font-semibold break-words mt-3">{item.title}</p>
            <p className="text-[1.4rem] break-words mt-1">{item.content}</p>
            <p className="text-[1.2rem] text-gray-400 mt-1">{item.place}</p>
            {item.location && <p className="text-[1.2rem] text-gray-400 mt-1">{item.location}</p>}
            <div className="absolute right-0 top-5 flex gap-1">
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
          </div>
        ))
      ) : (
        <div className="p-8 text-center font-semibold text-[1.6rem]">예약이 없습니다</div>
      )}
    </div>
  );
};

export default ModalSchedule;
