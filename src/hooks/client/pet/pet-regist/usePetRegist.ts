import { T_PetRegistSchema } from '@/components/regist-pet/validator/pet-regist-validator';
import usePetMutationQuery from '@/hooks/server/pet/pet-regist/usePetMutationQuery';
import { I_CustomUseHookFormProps } from '@/types/form/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

const usePetRegistForm = <T extends FieldValues>({ schema, defaultValues }: I_CustomUseHookFormProps<T>) => {
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { addPet } = usePetMutationQuery({ form });
  const submitPetRegistHandler = async (value: T_PetRegistSchema) => addPet(value);

  return { form, submitPetRegistHandler };
};

export default usePetRegistForm;
