import { axiosValid_API } from '@/api/common/axios_instance';
import { useQuery } from '@tanstack/react-query';

const useFetchGalleryDeleteQuery = (id: string) => {
  const fetchGalleriesDelete = async () => {
    try {
      const response = await axiosValid_API.delete(`post/${id}`);
      alert('게시물이 삭제되었습니다.');
      return response;
    } catch (error) {
      console.error('갤러리 데이터 삭제 실패:', error);
      alert('게시물 삭제 과정에서 에러가 발생했습니다.');
      throw error;
    }
  };

  const { isLoading, refetch } = useQuery({
    queryKey: ['galleryDelete', id],
    queryFn: fetchGalleriesDelete,
    enabled: false,
  });

  return { isLoading, refetch };
};

export default useFetchGalleryDeleteQuery;
