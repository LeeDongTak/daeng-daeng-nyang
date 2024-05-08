import CustomSelect from '@/components/common/form/CustomSelect';
import CustomRadioInput from '@/components/common/form/input-radio/CustomRadioInput';
import CustomInput from '@/components/common/form/input-text/CustomInput';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FormHTMLAttributes } from 'react';

interface I_FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}
const CalendarForm = (props: I_FormProps) => {
  const { className, children } = props;
  return (
    <form {...props} className={cn(className)}>
      {children}
    </form>
  );
};
CalendarForm.input = CustomInput;
CalendarForm.radio = CustomRadioInput;
CalendarForm.select = CustomSelect;
CalendarForm.button = Button;

export default CalendarForm;
