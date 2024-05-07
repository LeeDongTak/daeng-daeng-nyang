import { addPetInfo } from '@/components/regist-pet/api/server_api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues, UseFormReturn } from 'react-hook-form';

enum MUTATION_QUERY_KEY {
  ADD = 'ADD',
}
interface I_UsePetMutationQueryProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}
const usePetMutationQuery = <T extends FieldValues>({ form }: I_UsePetMutationQueryProps<T>) => {
  const queryClient = useQueryClient();

  const addPetInfoMutation = useMutation({
    mutationFn: addPetInfo,
    onMutate: () => {},
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: [MUTATION_QUERY_KEY.ADD] });
      console.log(data, 'petMutation');
    },
    onError: error => {
      console.log(error, 'petMutaion Erro');
    },
  });

  return {
    addPet: addPetInfoMutation.mutate,
  };
};

export default usePetMutationQuery;
