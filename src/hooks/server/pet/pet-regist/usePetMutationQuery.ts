import { addPetInfo } from '@/components/regist-pet/api/server_api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FieldValues, UseFormReturn } from 'react-hook-form';

enum MUTATION_QUERY_KEY {
  ADD = 'ADD',
}
interface I_UsePetMutationQueryProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}
const usePetMutationQuery = <T extends FieldValues>({ form }: I_UsePetMutationQueryProps<T>) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const addPetInfoMutation = useMutation({
    mutationFn: addPetInfo,
    onMutate: () => {},
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: [MUTATION_QUERY_KEY.ADD] });
      router.push('/profile');
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
