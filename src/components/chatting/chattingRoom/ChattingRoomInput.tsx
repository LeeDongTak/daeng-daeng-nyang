import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ChangeEvent, useEffect, useState } from 'react';

const ChattingRoomInput = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.length <= 0) {
      setIsButtonDisabled(true);
    } else if (searchInput.length > 0) {
      setIsButtonDisabled(false);
    }
  }, [searchInput]);

  return (
    <div className={cn('flex gap-[1.2rem] justify-between items-center w-[100%]')}>
      <Input
        placeholder="메시지를 적어주세요"
        className="text-[1.4rem] font-[400] h-[4.8rem] px-[1.9rem] py-[1.3rem] rounded-full"
        onChange={e => {
          changeInputHandler(e);
        }}
      />

      <Button type="button" variant="chat" size="chat" disabled={isButtonDisabled} text="전송" />
    </div>
  );
};

export default ChattingRoomInput;
