import { addScheduleAxios } from '@/components/map/api/server_api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
enum MUTATION_QUERY_KEY {
  SCHEDULE_QUERY = 'SCHEDULE_QUERY',
}
interface I_useAddScheduleMutation {
  removeSelectedMarker: () => void;
}
const useAddScheduleMutation = ({ removeSelectedMarker }: I_useAddScheduleMutation) => {
  const queryClient = useQueryClient();
  const addScheduleMutation = useMutation({
    mutationFn: addScheduleAxios,
    onSuccess: data => {
      removeSelectedMarker();
      queryClient.invalidateQueries({ queryKey: [MUTATION_QUERY_KEY.SCHEDULE_QUERY] });
    },
    onError: error => {
      // 에러 명세서 가지구 다시 처리해야함!!
      console.log('error', error);
    },
  });
  return {
    addSchedule: addScheduleMutation.mutate,
  };
};

export default useAddScheduleMutation;
