import { cn } from '@/lib/utils';
import Avatar from '../../../../public/icons/avatar.svg';
import Trash from '../../../../public/icons/trash-2.svg';
const ChattingRoomListItem = () => {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-[2.4rem]  w-[100%] h-auto py-[1.6rem] border-b-[1px] border-b-[#f2f4f7]',
      )}
    >
      <div
        className={cn(
          `flex-[1] relative w-auto before:absolute before:top-0 before:right-0
          before:rounded-full before:bg-[#ff583d] before:w-[1.6rem]
          before:h-[1.6rem] before:content-['0'] before:flex before:justify-center
          before:items-center before:text-white before:font-[700]`,
        )}
      >
        <Avatar width={'4.8rem'} height={'4.8rem'} />
      </div>
      <div className={cn('flex-[10]')}>
        <p className={cn('text-[1.6rem] font-[600] leading-[150%]')}>daeng daeng nyang</p>
        <p className={cn('text-[1.4rem] font-[400] leading-[150%]')}>안녕 나랑 친구할래?</p>
        <p className={cn('text-[1.2rem] font-[400] leading-[150%]')}>2024/04/01</p>
      </div>
      <div className={cn('flex-[2]')}>
        <p
          className={cn(
            'flex justify-center items-center w-[2.4rem] h-[2.4rem] rounded-full bg-[#f2f7f7] hover:bg-[#191919] hover:transition hover:duration-300 group',
          )}
        >
          <span
            className={cn(
              'group-hover:[&_path]:stroke-[#f2f4f7] group-hover:[&_path]:transition group-hover:[&_path]:duration-300 cursor-pointer',
            )}
          >
            <Trash width={'1.6rem'} height={'1.6rem'} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ChattingRoomListItem;
