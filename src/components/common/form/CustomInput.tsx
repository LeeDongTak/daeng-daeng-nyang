import { ComponentPropsWithoutRef } from 'react';
import { Control, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';

interface I_ControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ComponentPropsWithoutRef<'input'> {
  control: Control<TFieldValues>;
  name: TName;
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  className?: string;
  label: string;
}
/**
 *
 * @param props :  Input의 className으로 CSS 바꾸고 싶으면 className='tailwind'로 내려주면 알아서 css 됩니다.
 * @returns
 */
const CustomInput = <T extends FieldValues>({ control, name, label, ...props }: I_ControlProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
