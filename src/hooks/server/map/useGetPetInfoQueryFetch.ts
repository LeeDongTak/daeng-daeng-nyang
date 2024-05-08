import { getUserInfo } from '@/components/map/api/server_api';
import { useQuery } from '@tanstack/react-query';
enum QUERY_KEY {
  FETCH = 'fetch',
}

const useGetPetInfoQueryFetch = () => {
  const { data: pets, error } = useQuery({
    queryKey: [QUERY_KEY.FETCH],
    queryFn: getUserInfo,
    staleTime: Infinity,
  });

  return {
    pets,
    error,
  };
};

export default useGetPetInfoQueryFetch;
