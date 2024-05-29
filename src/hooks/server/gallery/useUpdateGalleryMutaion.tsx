import { updateGallery } from '@/components/gallery/api/gallery_api';
import { QUERY_KEY } from '@/lib/query-keys/gallery-key';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const useUpdateGalleryMutation = () => {
  const client = useQueryClient();
  const router = useRouter();

  const { mutate, data: updatedGalleryData } = useMutation<
    // I_GalleryData,
    { id: number },
    Error,
    { id: string; formData: FormData },
    unknown
  >({
    mutationFn: variables => updateGallery(variables),
    onSuccess: updatedGallery => {
      client.invalidateQueries({ queryKey: [QUERY_KEY.GALLERY_DETAIL, updatedGallery.id] });
      client.invalidateQueries({ queryKey: [QUERY_KEY.GALLERY_LIST] });
      router.push(`/gallery/detail/${updatedGallery.id}`);
    },
    onError: error => {
      console.error('갤러리 수정 실패:', error);
    },
  });

  return { mutate, data: updatedGalleryData };
};

export default useUpdateGalleryMutation;
