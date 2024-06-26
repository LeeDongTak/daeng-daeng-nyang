import { axiosValid_API } from '@/api/common/axios_instance';
import useToast from '@/hooks/client/useToast';
import { RedirectLoginPage } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// crud에서 데이터를 r(read)를 제외한 cud(등록, 수정, 삭제)는 useQuery가 아닌 useMutation입니다.
const useFetchGalleryDeleteQuery = (id: string) => {
  const client = useQueryClient();
  const { push } = useRouter();
  const { toast } = useToast();

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

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: fetchGalleriesDelete,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['galleryDetail', id] });
      push('/profile');
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

        push('/auth/login');
      }
    })();
  }, [isError, error]);

  return { mutate, isPending };
};

export default useFetchGalleryDeleteQuery;
