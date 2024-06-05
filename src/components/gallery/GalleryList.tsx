import useFetchGalleryQuery from '@/hooks/server/gallery/useFetchGalleryQuery';
import { useInView } from 'react-intersection-observer';
import GalleryItem from './GalleryItem';
import GalleryListSkeleton from './skeleton/GalleryListSkeleton';
import { I_GalleryData } from './type/gallery';

const GalleryList = () => {
  const { data: galleries, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useFetchGalleryQuery();

  const { ref } = useInView({
    threshold: 0.5,
    onChange: inView => {
      if (!inView || !hasNextPage || isFetchingNextPage) return;
      fetchNextPage();
    },
  });

  if (isLoading) return <GalleryListSkeleton />;
  if (!galleries) return <div>데이터가 없습니다.</div>;

  return (
    <>
      <div className="flex flex-wrap justify-start w-[128rem] h-auto gap-[0.8rem] mx-auto">
        {galleries.map((gallery: I_GalleryData, index) => (
          <GalleryItem gallery={gallery} key={index} />
        ))}
      </div>
      {/* 인피니티 스크롤을 위한 div */}
      <div ref={ref} className="h-[50px]"></div>
    </>
  );
};

export default GalleryList;
