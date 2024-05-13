import { updateGallery } from '@/components/gallery/api/gallery_api';
import { QUERY_KEY } from '@/lib/query-keys/gallery-key';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const useUpdateGalleryMutation = () => {
  const client = useQueryClient();
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { mutate } = useMutation({
    mutationFn: updateGallery,
    onSuccess: data => {
      client.invalidateQueries({ queryKey: [QUERY_KEY.GALLERY_DETAIL, data.id] });
      client.invalidateQueries({ queryKey: [QUERY_KEY.GALLERY_LIST] });
      router.push(`/gallery/detail/${id}`);
    },
    onError: error => {
      console.error('갤러리 수정 실패:', error);
    },
  });

  return { mutate };
};
export default useUpdateGalleryMutation;
