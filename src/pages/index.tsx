import Image from 'next/image';
import { Inter } from 'next/font/google';
import Title from '@/components/common/Title';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Title level={1} text="Hello world" />
      <Title level={2} text="Hello world" />
      <Title level={3} text="Hello world" />
      <Title level={4} text="Hello world" />
      <Title level={5} text="Hello world" />
    </main>
  );
}
