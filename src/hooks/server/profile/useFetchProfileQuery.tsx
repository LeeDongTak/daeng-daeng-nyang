import { fetchProfile } from '@/api/profile/fetch-profile';
import { QUERY_KEY } from '@/lib/query-keys/profile-key';
import { I_userInfoType } from '@/types/profile/profile';
import { useQuery } from '@tanstack/react-query';

const useFetchProfileQuery = () => {
  const { data, isError, isLoading } = useQuery<I_userInfoType>({
    queryKey: [QUERY_KEY.PROFILE],
    queryFn: () => fetchProfile(),
  });

  return { data, isError, isLoading };
};

export default useFetchProfileQuery;
