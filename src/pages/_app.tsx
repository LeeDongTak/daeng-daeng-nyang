import CommonLayout from '@/components/common/layout/CommonLayout';
import Toast from '@/components/common/toast/Toast';
import Modal from '@/components/modal/Modal';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const queryClient = new QueryClient();
const myFont = localFont({ src: '../../public/font/PretendardVariable.woff2', variable: '--main-font' });

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <main className={cn(myFont.variable)}>
            <CommonLayout>
              <Component {...pageProps} />
            </CommonLayout>
          </main>
          <Modal />
          <Toast />
        </HydrationBoundary>
      </QueryClientProvider>
    </SessionProvider>
  );
}
