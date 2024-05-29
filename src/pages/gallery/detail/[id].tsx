import GalleryDetail from '@/components/gallery/GalleryDetail';
import useFetchGalleryDetailQuery from '@/hooks/server/gallery/useFetchGalleryDetailQuery';
import Head from 'next/head';

const GalleryDetailPage = () => {
  const { data, isLoading } = useFetchGalleryDetailQuery();

  return (
    <>
      <Head>
        <title>{`${data?.title}`}</title>
      </Head>
      <GalleryDetail gallery={data} isLoading={isLoading} />
    </>
  );
};

export default GalleryDetailPage;
