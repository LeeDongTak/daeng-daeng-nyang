import Head from 'next/head';
import GalleryMain from '../../components/gallery/GalleryMain';

const Gallery = () => {
  return (
    <>
      <Head>
        <title>갤러리 - 홈</title>
      </Head>
      <GalleryMain />
    </>
  );
};

export default Gallery;
