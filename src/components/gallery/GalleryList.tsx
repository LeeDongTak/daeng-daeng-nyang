import useFetchGalleryQuery from '@/hooks/server/gallery/useFetchGalleryQuery';
import { useInView } from 'react-intersection-observer';
import GalleryItem from './GalleryItem';

// interface I_GalleryListProps {
//   galleries: I_GalleryData[];
// }

const GalleryList = () => {
  const { data: galleries, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useFetchGalleryQuery();

  const { ref } = useInView({
    threshold: 0.5,
    onChange: inView => {
      if (!inView || !hasNextPage || isFetchingNextPage) return;
      fetchNextPage();
    },
  });

  if (isLoading) return <div>로딩중.....</div>;
  if (!galleries) return <div>데이터가 없습니다.</div>;

  return (
    <>
      <div className="flex flex-wrap justify-start w-[128rem] h-auto gap-[0.8rem] mx-auto">
        {galleries.map((gallery, index) => (
          <GalleryItem gallery={gallery} />
        ))}
      </div>
      {/* 인피니티 스크롤을 위한 div */}
      <div ref={ref} className="h-[50px]"></div>
    </>
  );
};

export default GalleryList;
