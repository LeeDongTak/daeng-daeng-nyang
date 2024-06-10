import GalleryUpdate from '@/components/gallery/GalleryUpdate';
import Head from 'next/head';

const GalleryUpdatePage = () => {
  return (
    <>
      <Head>
        <title>갤러리 수정 - 댕댕냥 </title>
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="갤러리 홈 - 댕댕냥이 세상을 구한다!!" />
        <meta name="description" content="반려동물과 함께한 일상을 확인해보세요." />
        <meta name="keywords" content="반려동물, 애완동물, 산책, 동물병원, 동물약국, 산책로, 반려동물 산책" />
      </Head>
      <GalleryUpdate />
    </>
  );
};

export default GalleryUpdatePage;
