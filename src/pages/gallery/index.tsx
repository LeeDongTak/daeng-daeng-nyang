import Head from 'next/head';
import GalleryMain from '../../components/gallery/GalleryMain';

const Gallery = () => {
  return (
    <>
      <Head>
        <title>갤러리 - 홈</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <GalleryMain />
    </>
  );
};

export default Gallery;
