import CommonLayout from '@/components/common/layout/CommonLayout';
import Toast from '@/components/common/toast/Toast';

import Modal from '@/components/modal/Modal';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const queryClient = new QueryClient();
const myFont = localFont({ src: '../../public/font/PretendardVariable.woff2', variable: '--main-font' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <main className={cn(myFont.variable)}>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </main>
      <Modal />
      <Toast />
    </QueryClientProvider>
  );
}
