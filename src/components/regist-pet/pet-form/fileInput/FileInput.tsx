import NonImage from '@/components/common/non-image/NonImage';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputHTMLAttributes } from 'react';
import { Control, FieldPath, FieldValues, RefCallBack, UseFormRegisterReturn, useFormContext } from 'react-hook-form';
interface I_FileInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends InputHTMLAttributes<HTMLInputElement> {
  register: {
    type: 'file';
    ref: RefCallBack;
    name: TName;
    control: Control<TFieldValues>;
    register: UseFormRegisterReturn<TName>;
    onChange: (...event: any[]) => void;
  };
  labelCn?: string;
}
const FileInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  register,
  labelCn,
  ...props
}: I_FileInputProps<TFieldValues, TName>) => {
  const form = useFormContext();
  const hasPreviewImage = form.getValues(register.name);
  return (
    <FormItem className="w-64">
      {!hasPreviewImage && (
        <FormLabel className="w-64 h-64 block">
          <NonImage className="h-64 rounded-full" />
        </FormLabel>
      )}
      <FormControl>
        <Input {...register} className="hidden" {...props} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default FileInput;
