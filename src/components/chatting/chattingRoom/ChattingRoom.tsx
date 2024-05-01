import { cn } from '@/lib/utils';
import ChattingGroup from './ChattingGroup';
import ChattingRoomInput from './ChattingRoomInput';
import ChattingRoomTitle from './ChattingRoomTitle';

const ChattingRoom = () => {
  return (
    <div className={cn('flex flex-col gap-[1.8rem] w-[88.6rem] h-[100%]')}>
      <div className={cn('w-[88.6rem] h-[100%] bg-white rounded-[3rem]')}>
        <ChattingRoomTitle />
        <ChattingGroup />
      </div>
      <ChattingRoomInput />
    </div>
  );
};

export default ChattingRoom;
