import { axiosValid_API } from '@/api/common/axios_instance';
import { I_GalleryData } from '@/components/gallery/type/gallery';
import { useQuery } from '@tanstack/react-query';

const useFetchGalleryDetailQuery = (id: string) => {
  const fetchGalleriesDetail = async () => {
    try {
      const response = await axiosValid_API.get(`post/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('갤러리 데이터 가져오기 실패:', error);
    }
  };

  const { data, isLoading, refetch, isError, error } = useQuery<I_GalleryData>({
    queryKey: ['galleryDetail', id],
    queryFn: fetchGalleriesDetail,
    enabled: !!id,
  });

  return { data, isLoading, refetch };
};
export default useFetchGalleryDetailQuery;
