import Toast from '@/components/common/toast/Toast';
import Modal from '@/components/modal/Modal';
import '@/styles/globals.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Modal />
      <Toast />
    </>
  );
}
