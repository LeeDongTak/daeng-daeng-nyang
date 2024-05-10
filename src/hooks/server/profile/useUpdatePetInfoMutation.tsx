import { updatePetInfo } from '@/api/profile/update-pet-info';
import { QUERY_KEY } from '@/lib/query-keys/profile-key';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUpdatePetInfoMutation = () => {
  const client = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updatePetInfo,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QUERY_KEY.PROFILE] });
    },
  });

  return { mutate };
};

export default useUpdatePetInfoMutation;
