import { fetchProfile } from '@/api/profile/fetch-profile';
import useToast from '@/hooks/client/useToast';
import { QUERY_KEY } from '@/lib/query-keys/profile-key';
import { RedirectLoginPage } from '@/lib/utils';
import { I_userInfoType } from '@/types/profile/profile';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useFetchProfileQuery = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { data, isError, isLoading, error } = useQuery<I_userInfoType>({
    queryKey: [QUERY_KEY.PROFILE],
    queryFn: () => fetchProfile(),
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

  return { data, isError, isLoading };
};

export default useFetchProfileQuery;
