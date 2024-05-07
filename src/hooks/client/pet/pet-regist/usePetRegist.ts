import { I_CustomUseHookFormProps } from '@/types/form/form';
import { FieldValues } from 'react-hook-form';

const usePetRegist = <T extends FieldValues>({ schema, defaultValues }: I_CustomUseHookFormProps<T>) => {};

export default usePetRegist;
