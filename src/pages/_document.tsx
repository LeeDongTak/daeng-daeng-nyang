import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
