import Title from '@/components/common/Title';
import Toast from '@/components/common/toast/Toast';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Toast />
      <Title level={1} text="Hello world" />
      <Title level={2} text="Hello world" />
      <Title level={3} text="Hello world" />
      <Title level={4} text="Hello world" />
      <Title level={5} text="Hello world" />
    </main>
  );
}
