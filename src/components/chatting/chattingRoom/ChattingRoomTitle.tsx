import { cn } from '@/lib/utils';
import Avatar from '../../../../public/icons/avatar.svg';

const ChattingRoomTitle = () => {
  return (
    <div
      className={cn(
        'flex gap-[1.2rem] justify-start items-center w-full px-[3.2rem] py-[1.6rem] border-b-[1px] border-b-[#f2f4f7]',
      )}
    >
      <Avatar width={'4.8rem'} height={'4.8rem'} />
      <p className={cn('text-[1.6rem] font-[600]')}>daeng daeng nyang</p>
    </div>
  );
};

export default ChattingRoomTitle;
