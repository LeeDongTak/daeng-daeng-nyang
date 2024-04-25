import { cn } from '@/lib/utils';
import ScheduleList from './ScheduleList';
import ScheduleTitle from './ScheduleTitle';

const Schedule = () => {
  return (
    <div className={cn('w-[100%] h-auto')}>
      <div className={cn('w-[84.6rem] h-auto mx-auto')}>
        <ScheduleTitle />
        <ScheduleList />
      </div>
    </div>
  );
};

export default Schedule;
