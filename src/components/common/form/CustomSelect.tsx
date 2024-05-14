import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ComponentPropsWithRef } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
interface I_SelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ComponentPropsWithRef<'div'> {
  control: Control<TFieldValues>;
  name: TName;
  title: string;
  placeholder: string;
  selectItem: { value: string; label: string }[] | null;
  optionCn?: string; // 모달창에선 안보일땐 원하는 z-index 넣어주면 됨
  customOnchagne?: (value: string) => void;
  labelCn?: string;
  itemCn?: string;
}
const CustomSelect = <T extends FieldValues>({
  control,
  name,
  title,
  selectItem,
  placeholder,
  optionCn,
  labelCn,
  itemCn,
  customOnchagne,
}: I_SelectProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`space-y-3 ${itemCn}`}>
          <FormLabel className={labelCn}>{title}</FormLabel>
          <Select onValueChange={customOnchagne ? customOnchagne : field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className={optionCn}>
              {selectItem?.map(item => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label === '' ? '이름없음' : item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
