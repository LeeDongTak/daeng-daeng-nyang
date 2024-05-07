import { cn } from '@/lib/utils';
import { I_ScheduleType } from '@/types/profile/profile';
import ScheduleListItem from './ScheduleListItem';

const ScheduleList = ({ Schedules }: { Schedules: I_ScheduleType[] }) => {
  return (
    <div
      className={cn(
        `flex flex-col justify-start item-start gap-[0.8rem] w-[100%]
         h-[44.2rem] flex-shrink-0 overflow-y-scroll scrollbar pr-[1.8rem]
         scrollbar-w-4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
         scrollbar-track-white scrollbar-thumb-[#191919] scroll-[100rem]`,
      )}
    >
      {Schedules.map(item => (
        <ScheduleListItem key={item.id} SchedulesItem={item} />
      ))}
    </div>
  );
};

export default ScheduleList;
