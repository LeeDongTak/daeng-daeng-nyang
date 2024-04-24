import ChattingList from './chattingList/ChattingList';
import ChattingRoom from './chattingRoom/ChattingRoom';

const Chatting = () => {
  return (
    <main className={`min-h-[calc(100vh-8rem)] pt-[6.4rem]`}>
      <div className={`flex items-start justify-between w-[100%] max-w-[128rem] h-[calc(100vh-18.4rem)] mx-auto`}>
        <ChattingList />
        <ChattingRoom />
      </div>
    </main>
  );
};

export default Chatting;
