import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ComponentPropsWithRef } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
interface I_RadioProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ComponentPropsWithRef<'div'> {
  control: Control<TFieldValues>;
  name: TName;
  title: string;
  titleCn?: string;
  radioItem: { value: string; label: string }[];
}
const CustomRadioInput = <T extends FieldValues>({ control, name, title, radioItem, titleCn }: I_RadioProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className={titleCn}>{title}</FormLabel>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
              {radioItem.map(item => (
                <FormItem key={item.label} className="flex item-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={item.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CustomRadioInput;
