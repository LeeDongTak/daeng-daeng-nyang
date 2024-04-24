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
PetForm.input = CustomInput;
PetForm.file = FileInput;
PetForm.previewImage = PreviewImage;
PetForm.button = Button;
export default PetForm;
