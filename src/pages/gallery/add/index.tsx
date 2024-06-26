import GalleryRegist from '@/components/gallery/gallery-form/GalleryRegist';
import Head from 'next/head';

const AddGalleryPage = () => {
  return (
    <>
      <Head>
        <title>갤러리 등록 - 댕댕냥 </title>
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="댕댕냥 - 댕댕냥이 세상을 구한다!!" />
        <meta name="description" content="반려동물과 함께한 일상을 등록하고 추억을 간직해보세요!" />
        <meta name="keywords" content="반려동물, 애완동물, 산책, 동물병원, 동물약국, 산책로," />
      </Head>
      <GalleryRegist />
    </>
  );
};

export default AddGalleryPage;
