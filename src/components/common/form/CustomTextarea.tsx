import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { ComponentPropsWithRef } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface I_TextareaProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ComponentPropsWithRef<'textarea'> {
  control: Control<TFieldValues>;
  name: TName;
  className?: string;
  label?: string;
}

const CustomTextarea = <T extends FieldValues>({ control, name, label, ...props }: I_TextareaProps<T>) => {
  const LABEL_NAME = label ? label : name;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{LABEL_NAME}</FormLabel>
          <FormControl>
            <Textarea {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomTextarea;
