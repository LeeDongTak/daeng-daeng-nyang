import { updateGallery } from '@/components/gallery/api/gallery_api';
import useToast from '@/hooks/client/useToast';
import { QUERY_KEY } from '@/lib/query-keys/gallery-key';
import { RedirectLoginPage } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useUpdateGalleryMutation = () => {
  const client = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();

  const {
    mutate,
    data: updatedGalleryData,
    isError,
    error,
  } = useMutation<
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

  useEffect(() => {
    (async () => {
      if (await RedirectLoginPage(isError, error)) {
        toast({
          title: '로그인이 되어있지 않습니다. 로그인을 해주세요',
          variant: 'danger',
          position: 'top-center',
          closeTimeOut: 2000,
        });

        router.push('/auth/login');
      }
    })();
  }, [isError, error]);

  return { mutate, data: updatedGalleryData };
};

export default useUpdateGalleryMutation;
