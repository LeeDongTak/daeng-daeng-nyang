import { DefaultValues, FieldValues } from 'react-hook-form';
/**
 * 등록 폼에 사용될 커스텀 훅 타입입니다.
 */
export interface I_CustomUseHookFormProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: DefaultValues<T>;
}
