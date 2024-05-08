import { cn } from '@/lib/utils';
import { I_ScheduleType } from '@/types/profile/profile';
import ScheduleList from './ScheduleList';
import ScheduleTitle from './ScheduleTitle';

const Schedule = ({ schedules: Schedules }: { schedules: I_ScheduleType[] }) => {
  return (
    <div className={cn('w-[100%] h-auto')}>
      <div className={cn('w-[84.6rem] h-auto mx-auto')}>
        <ScheduleTitle />
        <ScheduleList Schedules={Schedules} />
      </div>
    </div>
  );
};

export default Schedule;
