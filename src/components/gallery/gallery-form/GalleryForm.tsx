import CustomTextarea from '@/components/common/form/CustomTextarea';
import CustomRadioInput from '@/components/common/form/input-radio/CustomRadioInput';
import CustomInput from '@/components/common/form/input-text/CustomInput';
import FileInput from '@/components/regist-pet/pet-form/fileInput/FileInput';
import PreviewImage from '@/components/regist-pet/preview-image/PreviewImage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FormHTMLAttributes } from 'react';
interface I_FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const GalleryForm = (props: I_FormProps) => {
  const { className, children } = props;
  return (
    <form {...props} className={cn(className)}>
      {children}
    </form>
  );
};
GalleryForm.input = CustomInput;
GalleryForm.textarea = CustomTextarea;
GalleryForm.button = Button;
GalleryForm.file = FileInput;
GalleryForm.previewImage = PreviewImage;
GalleryForm.radio = CustomRadioInput;

export default GalleryForm;
