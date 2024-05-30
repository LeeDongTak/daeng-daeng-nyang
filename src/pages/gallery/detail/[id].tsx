import GalleryDetail from '@/components/gallery/GalleryDetail';
import useFetchGalleryDetailQuery from '@/hooks/server/gallery/useFetchGalleryDetailQuery';
import Head from 'next/head';

const GalleryDetailPage = () => {
  const { data, isLoading } = useFetchGalleryDetailQuery();

  return (
    <>
      <Head>
        <title>{`${data?.title}`}</title>
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="댕댕냥 - 댕댕냥이 세상을 구한다!!" />
        <meta
          name="description"
          content="누구의 반려동물 또는 자신의 반려동물과 관련해 글을 작성하거나, 좋아요를 표시하며 서로 정보를 교환해보세요"
        />
        <meta name="keywords" content="반려동물, 애완동물, 산책, 동물병원, 동물약국, 산책로," />
      </Head>
      <GalleryDetail gallery={data} isLoading={isLoading} />
    </>
  );
};

export default GalleryDetailPage;
