import { addScheduleAPI, deleteScheduleAPI } from '@/components/calendar/api/server_api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues, UseFormReturn } from 'react-hook-form';

enum MUTATION_QUERY_KEY {
  SCHEDULE_QUERY = 'SCHEDULE_QUERY',
}
interface I_ScheduleMutationQueryProps<T extends FieldValues> {
  form?: UseFormReturn<T>;
}
const useScheduleMutationQuery = <T extends FieldValues>({ form }: I_ScheduleMutationQueryProps<T>) => {
  const queryClient = useQueryClient();

  // 스케쥴 추가
  const addScheduleMutation = useMutation({
    mutationFn: addScheduleAPI,
    onMutate: () => {},
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: [MUTATION_QUERY_KEY.SCHEDULE_QUERY] });
    },
    onError: error => {
      console.log(error, 'add schedule error');
    },
  });

  // 스케쥴 삭제
  const deleteScheduleMutation = useMutation({
    mutationFn: deleteScheduleAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [MUTATION_QUERY_KEY.SCHEDULE_QUERY] });
    },
  });

  return {
    addSchedule: addScheduleMutation.mutate,
    deleteSchedule: deleteScheduleMutation.mutate,
  };
};

export default useScheduleMutationQuery;
