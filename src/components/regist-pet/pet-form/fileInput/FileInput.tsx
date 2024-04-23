import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldPath, FieldValues, RefCallBack, UseFormRegisterReturn } from 'react-hook-form';
interface I_FileInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  register: {
    type: 'file';
    ref: RefCallBack;
    name: TName;
    control: Control<TFieldValues>;
    register: UseFormRegisterReturn<TName>;
    onChange: (...event: any[]) => void;
  };
}
const FileInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  register,
  ...props
}: I_FileInputProps<TFieldValues, TName>) => {
  return (
    <FormItem>
      <FormLabel>파일</FormLabel>
      <FormControl>
        <Input {...register} className="hidden" />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default FileInput;
