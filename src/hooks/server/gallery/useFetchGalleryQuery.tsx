import { axiosValid_API } from '@/api/common/axios_instance';
import { useInfiniteQuery } from '@tanstack/react-query';

const useFetchGalleryQuery = () => {
  /**
   * api요청 함수 (다른파일로 분리하여 import 하시면 됩니다.)
   */
  const fetchGalleries = async (pageParam: number) => {
    try {
      console.log(pageParam);
      const response = await axiosValid_API.get(`post/All/${pageParam}`);
      if (response.status >= 200 && response.status < 300) {
        // setGalleries(response.data);
        console.log('갤러리 데이터 가져오기 성공!');

        return response.data;
      } else {
        console.error('갤러리 데이터 가져오기 실패:', response.data);
      }
    } catch (error) {
      console.error('갤러리 데이터 가져오기 실패:', error);
    }
  };

  /**
   * 무한스클롤 용 react-query
   */
  const { data, isLoading, isError, error, hasNextPage, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteQuery(
    {
      queryKey: ['galleryUpload'],
      queryFn: ({ pageParam }) => fetchGalleries(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPage) => {
        if (lastPage) {
          if (lastPage?.length === 0) {
            return;
          } else {
            return allPage.length + 1;
          }
        }
      },
      select: data => {
        return data.pages.map(pageData => pageData).flat();
      },
    },
  );

  return { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage, refetch };
};

export default useFetchGalleryQuery;
