import { addPetInfo } from '@/components/regist-pet/api/server_api';
import useToast from '@/hooks/client/useToast';
import { RedirectLoginPage } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

enum MUTATION_QUERY_KEY {
  ADD = 'ADD',
}
interface I_UsePetMutationQueryProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}
const usePetMutationQuery = <T extends FieldValues>({ form }: I_UsePetMutationQueryProps<T>) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const {
    mutate: addPetInfoMutation,
    isError,
    error,
  } = useMutation({
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
  useEffect(() => {
    (async () => {
      if (await RedirectLoginPage(isError, error)) {
        toast({
          title: '로그인이 되어있지 않습니다. 로그인을 해주세요',
          variant: 'danger',
          position: 'top-center',
          closeTimeOut: 2000,
        });

        router.push('/auth/login');
      }
    })();
  }, [isError, error]);

  return {
    addPet: addPetInfoMutation,
  };
};

export default usePetMutationQuery;
