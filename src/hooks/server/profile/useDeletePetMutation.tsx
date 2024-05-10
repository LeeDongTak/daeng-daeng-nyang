import { deletePet } from '@/api/profile/delete-pet';
import { QUERY_KEY } from '@/lib/query-keys/profile-key';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeletePetMutation = () => {
  const client = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deletePet,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QUERY_KEY.PROFILE] });
    },
  });

  return { mutate };
};

export default useDeletePetMutation;
