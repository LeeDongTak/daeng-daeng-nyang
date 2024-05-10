import NonImage from '@/components/common/non-image/NonImage';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { InputHTMLAttributes } from 'react';
import { Control, FieldPath, FieldValues, RefCallBack, UseFormRegisterReturn, useFormContext } from 'react-hook-form';
interface I_FileInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends InputHTMLAttributes<HTMLInputElement> {
  register: {
    type: 'file';
    ref: RefCallBack;
    name: TName;
    control: Control<TFieldValues>;
    register: UseFormRegisterReturn<TName>;
    onChange: (...event: any[]) => void;
  };
  labelCn?: string;
  itemCn?: string;
  profileImage?: string | null;
}
const FileInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  register,
  labelCn,
  itemCn,
  profileImage = null,
  ...props
}: I_FileInputProps<TFieldValues, TName>) => {
  const form = useFormContext();
  const hasPreviewImage = form.getValues(register.name);
  return (
    <FormItem className={`w-64 ${itemCn}`}>
      {!hasPreviewImage && (
        <FormLabel className={`w-64 h-64 block cursor-pointer${labelCn}`}>
          {profileImage ? (
            <div className={`relative w-64 h-64 rounded-full overflow-hidden cursor-pointer`}>
              <Image src={`${profileImage}`} alt="수정이미지" layout="fill" objectFit="cover" objectPosition="center" />
            </div>
          ) : (
            <NonImage className="h-64 rounded-full cursor-pointer" />
          )}
        </FormLabel>
      )}
      <FormControl>
        <Input {...register} className="hidden" {...props} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default FileInput;
