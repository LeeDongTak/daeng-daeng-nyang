import { cn } from '@/lib/utils';
import ChattingRoomListItem from './ChattingRoomListItem';

const ChattingRoomList = () => {
  return (
    <div className={cn('w-[100%] h-[100%] bg-white py-[2.4rem] px-[1.6rem] rounded-[3rem]')}>
      <div
        className={cn(`w-[100%] h-[100%] overflow-y-scroll scrollbar pr-[1.8rem]
        scrollbar-w-4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
        scrollbar-track-white scrollbar-thumb-[#191919] scroll-[100rem]`)}
      >
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
        <ChattingRoomListItem />
      </div>
    </div>
  );
};

export default ChattingRoomList;
