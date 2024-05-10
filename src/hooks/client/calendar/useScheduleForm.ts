import { T_ScheduleSchemaBaic } from '@/components/calendar/validator/schedule-validator';
import useScheduleMutationQuery from '@/hooks/server/calendar/useScheduleMutationQuery';
import useScheduleFormStore from '@/store/calendar/form-store';
import { ScheduleDataType } from '@/types/calendar/calendar';
import { I_CustomUseHookFormProps } from '@/types/form/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { useModal } from '../ui/useModal';

const useScheduleForm = <T extends FieldValues>({
  schema,
  defaultValues,
  modalId,
  updateScheduleData,
}: I_CustomUseHookFormProps<T> & { modalId: string; updateScheduleData?: ScheduleDataType }) => {
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { addSchedule, updateSchedule } = useScheduleMutationQuery({ form });
  const scheduleFormDateStore = useScheduleFormStore(state => state.date);
  const { DaengModal } = useModal();

  const submitHandler = async (value: T_ScheduleSchemaBaic) => {
    const changeValueTarget = {
      petId: value.petId,
      category: value.category,
      title: value.title,
      content: value.content,
      date: scheduleFormDateStore + 'T' + value.hour + ':' + value.minutes + ':00',
      place: value.place,
      location: value.location ?? '',
    };

    const changeEditValueTarget = {
      changeValueTarget,
      id: updateScheduleData?.id,
    };

    if (!updateScheduleData) addSchedule(changeValueTarget);
    else updateSchedule(changeEditValueTarget);

    DaengModal.hide(modalId ?? '');
  };

  return { form, submitHandler };
};

export default useScheduleForm;
