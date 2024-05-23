import Chatting from '@/components/chatting/Chatting';
import Head from 'next/head';

const ChattingPage = () => {
  return (
    <>
      <Head>
        <title>댕댕냥 - 다이렉트 메시지</title>
      </Head>
      <Chatting />
    </>
  );
};
export default ChattingPage;
