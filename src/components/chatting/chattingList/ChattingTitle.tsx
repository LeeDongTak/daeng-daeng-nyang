import Title from '@/components/common/Title';
import { cn } from '@/lib/utils';

const ChattingTitle = () => {
  return (
    <div className={cn('w-[100%] h-auto mx-auto mb-[2.1rem]')}>
      <Title level={5} className="m-0 p-0 text-[6.4rem] font-[700]" text="Message" isOutfit={true} />
    </div>
  );
};

export default ChattingTitle;
