import '@/styles/globals.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';
import Modal from '@/components/modal/Modal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Modal />
    </>
  );
}
