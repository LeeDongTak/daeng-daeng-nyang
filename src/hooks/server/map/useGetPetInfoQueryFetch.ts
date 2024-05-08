import { getUserInfo } from '@/components/map/api/server_api';
import { setUseMap_PetInfo } from '@/store/map/user-info/userInfo-store';
import { useQuery } from '@tanstack/react-query';
enum QUERY_KEY {
  FETCH = 'fetch',
}

const useGetPetInfoQueryFetch = () => {
  useQuery({
    queryKey: [QUERY_KEY.FETCH],
    queryFn: () => getUserInfo(),
    select: ({ user }) => setUseMap_PetInfo(user.pets),
    staleTime: Infinity,
  });
};

export default useGetPetInfoQueryFetch;
