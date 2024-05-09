import { addScheduleAPI } from '@/components/calendar/api/server_api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues, UseFormReturn } from 'react-hook-form';

enum MUTATION_QUERY_KEY {
  SCHEDULE_QUERY_ADD = 'SCHEDULE_QUERY_ADD',
}
interface I_ScheduleMutationQueryProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}
const useScheduleMutationQuery = <T extends FieldValues>({ form }: I_ScheduleMutationQueryProps<T>) => {
  const queryClient = useQueryClient();
  const addScheduleMutation = useMutation({
    mutationFn: addScheduleAPI,
    onMutate: () => {},
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: [MUTATION_QUERY_KEY.SCHEDULE_QUERY_ADD] });
    },
    onError: error => {
      console.log(error, 'add schedule error');
    },
  });

  return {
    addSchedule: addScheduleMutation.mutate,
  };
};

export default useScheduleMutationQuery;
