import GalleryRegist from '@/components/gallery/gallery-form/GalleryRegist';
import Head from 'next/head';

const AddGalleryPage = () => {
  return (
    <>
      <Head>
        <title>댕댕냥 - 갤러리 등록</title>
      </Head>
      <GalleryRegist />
    </>
  );
};

export default AddGalleryPage;
