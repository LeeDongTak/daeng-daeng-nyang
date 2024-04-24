import { cn } from '@/lib/utils';
import Avatar from '../../../../public/icons/avatar.svg';

const MessageItem = ({ isMyMessage }: { isMyMessage: boolean }) => {
  const myMessageStyle = isMyMessage ? 'flex-row-reverse' : '';

  return (
    <div className={cn('flex gap-[1.2rem] w-full h-auto', myMessageStyle)}>
      {!isMyMessage && (
        <p>
          <Avatar width={'3.8rem'} height={'3.8rem'} />
        </p>
      )}
      <div className={cn('flex flex-col gap-[0.8rem]')}>
        <p className={cn('flex ', myMessageStyle)}>
          <span
            className={cn(
              'text-[1.4rem] font-[400] w-auto h-auto bg-[#f2f4f7] px-[1.2rem] pt-[0.6rem] pb-[0.8rem] rounded-[1rem] rounded-ss-none',
            )}
          >
            안녕
          </span>
        </p>
        <span className={cn('text-[1.2rem] font-[400]')}>2024/04/02 21:33</span>
      </div>
    </div>
  );
};

export default MessageItem;
