import CustomCalendarInput from '@/components/common/form/input-calendar/CustomCalendarInput';
import CustomRadioInput from '@/components/common/form/input-radio/CustomRadioInput';
import CustomInput from '@/components/common/form/input-text/CustomInput';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FormHTMLAttributes } from 'react';
import PreviewImage from '../preview-image/PreviewImage';
import FileInput from './fileInput/FileInput';

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
PetForm.calendar = CustomCalendarInput;
PetForm.input = CustomInput;
PetForm.file = FileInput;
PetForm.previewImage = PreviewImage;
PetForm.radio = CustomRadioInput;
PetForm.button = Button;
export default PetForm;
