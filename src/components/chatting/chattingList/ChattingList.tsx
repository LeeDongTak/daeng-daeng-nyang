import { cn } from '@/lib/utils';
import ChattingRoomList from './ChattingRoomList';
import ChattingSearch from './ChattingSearch';
import ChattingTitle from './ChattingTitle';

const ChattingList = () => {
  return (
    <div className={cn('w-[37.6rem] h-[calc(100%-18.1em)]')}>
      <ChattingTitle />
      <ChattingSearch />
      <ChattingRoomList />
    </div>
  );
};

export default ChattingList;
