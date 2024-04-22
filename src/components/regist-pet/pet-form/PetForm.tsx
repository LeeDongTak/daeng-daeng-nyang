import CustomInput from '@/components/common/form/input-text/CustomInput';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FormHTMLAttributes } from 'react';

interface I_FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}
const PetForm = (props: I_FormProps) => {
  const { className, children } = props;
  return (
    <form {...props} className={cn(className)}>
      {children}
    </form>
  );
};
PetForm.input = CustomInput;
PetForm.button = Button;
export default PetForm;
