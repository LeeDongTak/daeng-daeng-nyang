import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Search from '../../../../public/icons/search.svg';

const ChattingSearch = () => {
  return (
    <div className={cn('relative w-[100%] mb-[1.6rem]')}>
      <Input
        placeholder="채팅방 찾기"
        className="text-[1.4rem] font-[400] h-[4.8rem] px-[1.9rem] py-[1.3rem] rounded-full"
      />
      <span className="absolute bg-white top-[50%] translate-y-[-50%] right-[1.8rem] cursor-pointer">
        <Search width={'2.4rem'} height={'2.4rem'} />
      </span>
    </div>
  );
};

export default ChattingSearch;
