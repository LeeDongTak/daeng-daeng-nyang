import GalleryDetail from '@/components/gallery/GalleryDetail';
import useFetchGalleryDetailQuery from '@/hooks/server/gallery/useFetchGalleryDetailQuery';
import Head from 'next/head';
import { useRouter } from 'next/router';

const GalleryDetailPage = () => {
  const { query } = useRouter();
  const { id } = query as { id: string };
  const { data, isLoading, refetch: fetchGalleries } = useFetchGalleryDetailQuery(id);

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
