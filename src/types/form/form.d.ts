import { DefaultValues, FieldValues } from 'react-hook-form';

export interface I_CustomUseHookFormProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: DefaultValues<T>;
}
