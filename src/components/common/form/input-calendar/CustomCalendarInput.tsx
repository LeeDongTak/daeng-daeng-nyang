import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
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
}
const CustomCalendarInput = <T extends FieldValues>({ control, name, ...props }: I_CustomCalendarProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date of birth</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                >
                  {field.value ? format(field.value, 'PPP', { locale: ko }) : <span>Pick a date</span>}
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
                disabled={date => date > new Date() || date < new Date('1900-01-01')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomCalendarInput;
