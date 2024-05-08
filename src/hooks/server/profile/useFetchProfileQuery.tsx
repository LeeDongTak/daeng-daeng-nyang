import { fetchProfile } from '@/api/profile/fetch-profile';
import { QUERY_KEY } from '@/lib/query-keys/profile-key';
import { I_userInfoType } from '@/types/profile/profile';
import { useQuery } from '@tanstack/react-query';

const useFetchProfileQuery = () => {
  const authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE0OTI3NjU4LCJleHAiOjE3MTQ5Mjc5NTh9.n2WbwEJTz80uOBXmVZ3lzVAZNSQxZ_glEUj6Yg2Kmvs';
  const refreshtoken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQ5Mjc2NTgsImV4cCI6MTcxNTUzMjQ1OH0.KP2pUSNwbKAyCJppsWUVnZ_QHHM5EQqqf5x8w6eP_Xs';

  const { data, isError, isLoading } = useQuery<I_userInfoType>({
    queryKey: [QUERY_KEY.PROFILE],
    queryFn: () => fetchProfile({ authorization, refreshtoken }),
  });

  return { data, isError, isLoading };
};

export default useFetchProfileQuery;
