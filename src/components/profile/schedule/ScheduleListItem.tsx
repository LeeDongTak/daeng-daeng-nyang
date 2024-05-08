import { cn } from '@/lib/utils';
import { I_ScheduleType } from '@/types/profile/profile';
import dayjs from 'dayjs';

const ScheduleListItem = ({ SchedulesItem }: { SchedulesItem: I_ScheduleType }) => {
  const { date, title, location, content } = SchedulesItem;

  return (
    <div className={cn('flex justify-center items-center w-[100%] h-[8.2rem] text-[1.6rem] rounded-[0.6rem]')}>
      <div
        className={cn(
          'flex-[1] flex flex-col justify-between items-start h-[100%] p-[1.6rem] rounded-[0.6rem] bg-[#e3eff7]',
        )}
      >
        <div className={cn('flex justify-between w-[100%] items-center font-[400]')}>
          <span>{dayjs(date).format('YYYY-MM-DD')}</span>
          <span>{dayjs(date).format('HH:mm')}</span>
        </div>
        <div className={cn('text-[1.6rem] font-[600]')}>{location}</div>
      </div>
      <div
        className={cn(
          'flex-[4] flex flex-col justify-between items-start h-[100%] rounded-[0.6rem] p-[1.6rem] bg-[#fff]',
        )}
      >
        <p className={cn('font-[600]')}>{title}</p>
        <p className={cn('font-[400]')}>{content}</p>
      </div>
    </div>
  );
};

export default ScheduleListItem;
