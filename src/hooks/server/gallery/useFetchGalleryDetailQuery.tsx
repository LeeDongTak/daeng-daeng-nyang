import { axiosValid_API } from '@/api/common/axios_instance';
import { I_GalleryData } from '@/components/gallery/type/gallery';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useFetchGalleryDetailQuery = () => {
  const router = useRouter();
  const { id } = router.query;

  /**
   * api요청 함수 (다른파일로 분리하여 import 하시면 됩니다.)
   */
  const fetchGalleriesDetail = async () => {
    try {
      const response = await axiosValid_API.get(`post/${id}`);

      return response.data;
    } catch (error) {
      console.error('갤러리 데이터 가져오기 실패:', error);
    }
  };

  const { data, isLoading } = useQuery<I_GalleryData>({
    queryKey: ['galleryDetail', id],
    queryFn: fetchGalleriesDetail,
  });

  useEffect(() => {}, []);

  return { data, isLoading };
};

export default useFetchGalleryDetailQuery;
