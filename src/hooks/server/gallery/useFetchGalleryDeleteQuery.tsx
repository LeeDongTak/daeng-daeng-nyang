import { axiosValid_API } from '@/api/common/axios_instance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

// crud에서 데이터를 r(read)를 제외한 cud(등록, 수정, 삭제)는 useQuery가 아닌 useMutation입니다.
const useFetchGalleryDeleteQuery = (id: string) => {
  const client = useQueryClient();
  const { push } = useRouter();

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

  const { mutate, isPending } = useMutation({
    mutationFn: fetchGalleriesDelete,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['galleryDetail', id] });
      push('/profile');
    },
  });

  return { mutate, isPending };
};

export default useFetchGalleryDeleteQuery;
