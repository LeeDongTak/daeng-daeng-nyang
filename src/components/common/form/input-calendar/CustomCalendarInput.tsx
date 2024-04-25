import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { DateValues, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { HTMLAttributes } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
interface I_CustomCalendarProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends HTMLAttributes<'div'> {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  labelCn?: string;
  description?: string;
  formatType?: string;
  calendarLabel: string;
  inputCn?: string;
}
const CustomCalendarInput = <T extends FieldValues>({
  control,
  name,
  label,
  labelCn,
  description,
  formatType = 'PPP',
  calendarLabel,
  inputCn,
  ...props
}: I_CustomCalendarProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && <FormLabel className={labelCn}>{label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[240px] pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground',
                    inputCn,
                  )}
                >
                  {field.value ? format(field.value, formatType, { locale: ko }) : <span>{calendarLabel}</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                locale={ko}
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date: DateValues) => date > new Date() || date < new Date('1900-01-01')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomCalendarInput;
