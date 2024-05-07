import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';

const ChattingGroup = () => {
  const chatRoomRef = useRef<HTMLDivElement | null>(null);

  /**
   * 채팅방 스크롤을 맨아래로 focus
   */
  useEffect(() => {
    if (!chatRoomRef) return;
    chatRoomRef?.current?.scrollTo({ top: chatRoomRef?.current?.scrollHeight, behavior: 'smooth' });
  }, [chatRoomRef]);

  /**
   * isMyMessage : 현재 로그인된 유저가 작성한 메시지이면 true, 상대방이 쓴 메시지면 false
   */
  return (
    <div
      className={cn(`flex flex-col w-full h-full max-h-[63vh] p-[3.2rem] overflow-y-scroll scrollbar pr-[1.8rem]
      scrollbar-w-4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
      crollbar-track-white scrollbar-thumb-[#191919] scroll-[100rem]`)}
      ref={chatRoomRef}
    >
      <MessageItem isMyMessage={false} key={1} />
      <MessageItem isMyMessage={true} key={2} />
    </div>
  );
};

export default ChattingGroup;
