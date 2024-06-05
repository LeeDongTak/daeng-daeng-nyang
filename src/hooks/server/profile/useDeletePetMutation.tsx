import { deletePet } from '@/api/profile/delete-pet';
import useToast from '@/hooks/client/useToast';
import { QUERY_KEY } from '@/lib/query-keys/profile-key';
import { RedirectLoginPage } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useDeletePetMutation = () => {
  const client = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();
  const { mutate, isError, error } = useMutation({
    mutationFn: deletePet,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QUERY_KEY.PROFILE] });
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

  return { mutate };
};

export default useDeletePetMutation;
