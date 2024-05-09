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
  labelCn?: string;
  radioItem: { value: string; label: string }[];
  itemCn?: string;
  radioCn?: { radio?: string; label?: string };
}
const CustomRadioInput = <T extends FieldValues>({
  control,
  name,
  title,
  radioItem,
  labelCn,
  itemCn,
  radioCn,
}: I_RadioProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={itemCn}>
          <FormLabel className={labelCn}>{title}</FormLabel>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-6 items-center">
              {radioItem.map(item => (
                <FormItem key={item.label} className="flex item-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem className={radioCn?.radio} value={item.value} />
                  </FormControl>
                  <FormLabel className={`font-normal leading-tight cursor-pointer ${radioCn?.label}`}>
                    {item.label}
                  </FormLabel>
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
