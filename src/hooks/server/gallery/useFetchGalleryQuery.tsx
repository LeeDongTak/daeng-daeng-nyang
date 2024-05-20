import { axiosApiRouteAPINotHeader } from '@/api/common/axios_instance';
import { useInfiniteQuery } from '@tanstack/react-query';

const useFetchGalleryQuery = () => {
  /**
   * api요청 함수 (다른파일로 분리하여 import 하시면 됩니다.)
   */
  const fetchGalleries = async (pageParam: number) => {
    try {
      const response = await axiosApiRouteAPINotHeader.get(`post/All/${pageParam}?isNotHeader=true`);
      console.log(response);
      return response.data;
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
