import CustomSelect from '@/components/common/form/CustomSelect';
import CustomCalendarInput from '@/components/common/form/input-calendar/CustomCalendarInput';
import CustomRadioInput from '@/components/common/form/input-radio/CustomRadioInput';
import CustomInput from '@/components/common/form/input-text/CustomInput';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

interface I_FormProps extends ComponentPropsWithoutRef<'form'> {
  children: React.ReactNode;
}

const ScheduleForm = (props: I_FormProps) => {
  const { className, children } = props;
  return (
    <form {...props} className={cn(className)}>
      {children}
    </form>
  );
};

export default ScheduleForm;
ScheduleForm.input = CustomInput;
ScheduleForm.button = Button;
ScheduleForm.calendar = CustomCalendarInput;
ScheduleForm.radioBox = CustomRadioInput;
ScheduleForm.selectBox = CustomSelect;
