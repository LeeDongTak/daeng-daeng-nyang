import { T_ScheduleSchema } from '@/components/map/form/validator/schedule-validator';
import { refinePetInfo } from '@/components/map/utility/form-utils';
import useAddScheduleMutation from '@/hooks/server/map/useAddScheduleMutation';
import useMap_PetStore from '@/store/map/user-info/userInfo-store';
import { I_PetInfo } from '@/types/map/pet-info/pet-info';
import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';
import { ZodType } from 'zod';

interface I_MapModalFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: DefaultValues<T>;
  removeSelectedMarker: () => void | null;
}
const useModalForm = <T extends FieldValues>({
  schema,
  defaultValues,
  removeSelectedMarker,
}: I_MapModalFormProps<T>) => {
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { addSchedule } = useAddScheduleMutation({ removeSelectedMarker });
  const pets = useMap_PetStore(state => state.pets) as I_PetInfo[];
  const select_item = refinePetInfo(pets ?? null);
  const submitHandler = (value: T_ScheduleSchema) => {
    addSchedule(value);
  };
  const customSelectDisableDate = (param: Date) => param < new Date();
  return {
    select_item,
    form,
    submitHandler,
    customSelectDisableDate,
  };
};

export default useModalForm;
