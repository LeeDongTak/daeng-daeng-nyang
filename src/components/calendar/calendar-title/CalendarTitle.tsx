import Title from '@/components/common/Title';
import { cn } from '@/lib/utils';

const CalendarTitle = () => {
  return (
    <div className={cn('w-[100%] h-auto mx-auto mb-[4.8rem]')}>
      <Title level={5} className="m-0 p-0 text-[6.4rem] font-[700]" text="Calendar" isOutfit={true} />
      <Title
        level={1}
        className="h-[1.8rem] m-0 p-0 text-[1.8rem] font-[700]"
        text="당신의 반려견과 일정을 잡아보세요"
      />
    </div>
  );
};

export default CalendarTitle;
