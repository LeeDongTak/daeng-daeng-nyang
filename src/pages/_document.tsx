import { Head, Html, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="댕댕냥 - 댕댕냥이 세상을 구한다!!" />
        <meta
          name="description"
          content="반려동물에게 필요한 동물병원, 동물약국 그리고 산책로에대한 정보를 한 눈에 확인하고, 일정을 등록해보세요!"
        />
        <meta
          name="keywords"
          content="반려동물, 애완동물, 산책, 동물병원, 동물약국, 산책로, 댕댕냥이 세상을 구한다, "
        />
        {/* Naver WebMaster */}
        <meta name="naver-site-verification" content="44417ac2c17a79545912adf1651d5c9556c12e61" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.daengdaengnyang.shop/" />
        <meta property="og:title" content="댕댕냥 - 댕댕냥이 세상을 구한다!!" />
        <meta
          property="og:description"
          content="반려동물에게 필요한 동물병원, 동물약국 그리고 산책로에대한 정보를 한 눈에 확인하고, 일정을 등록해보세요!"
        />
        <meta property="og:image" content={'/seo/open-graph/OpenGraph-Image-1200x620.png'} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="620" />
        <meta property="og:image:type" content="image/png" />

        {/* <!-- Open Graph / Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.daengdaengnyang.shop/" />
        <meta property="twitter:title" content="댕댕냥 - 댕댕냥이 세상을 구한다!!" />
        <meta
          property="twitter:description"
          content="반려동물에게 필요한 동물병원, 동물약국 그리고 산책로에대한 정보를 한 눈에 확인하고, 일정을 등록해보세요!"
        />
        <meta property="twitter:image" content={'/seo/open-graph/OpenGraph-Image-1200x620.png'} />
        <link rel="apple-touch-icon" sizes="57x57" href="/seo/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/seo/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/seo/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/seo/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/seo/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/seo/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/seo/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/seo/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/seo/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/seo/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/seo/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/seo/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/seo/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/seo/favicon/ms-icon-144x144.png" />
        <link
          href="/pwa/splash-screens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/pwa/splash-screens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/pwa/splash-screens/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/pwa/splash-screens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/pwa/splash-screens/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/pwa/splash-screens/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/pwa/splash-screens/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/pwa/splash-screens/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/pwa/splash-screens/ipadpro3_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/pwa/splash-screens/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
