import { fetchProfile } from '@/api/profile/fetch-profile';
import { QUERY_KEY } from '@/lib/query-keys/profile-key';
import { I_userInfoType } from '@/types/profile/profile';
import { useQuery } from '@tanstack/react-query';

const useFetchProfileQuery = () => {
  const authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0OTE1MTQ5LCJleHAiOjE3MTQ5MTU0NDl9.2zE8J9T9HNWgR_CMG1LxipmnfgrOM3ye4UZ7cbXqGz8';
  const refreshtoken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQ5MTk4MTEsImV4cCI6MTcxNTUyNDYxMX0.D_n2qVXAOtE55i5n8qTRjDJYPb71ir57pCQWif-pZv0';

  const { data, isError, isLoading } = useQuery<I_userInfoType>({
    queryKey: [QUERY_KEY.PROFILE],
    queryFn: () => fetchProfile({ authorization, refreshtoken }),
  });

  return { data, isError, isLoading };
};

export default useFetchProfileQuery;
