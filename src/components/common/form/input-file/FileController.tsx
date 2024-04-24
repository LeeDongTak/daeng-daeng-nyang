import { getBase64 } from '@/lib/utils';
import { ChangeEvent, useRef, useState } from 'react';
import {
  Control,
  ControllerFieldState,
  FieldPath,
  FieldValues,
  RefCallBack,
  UseControllerProps,
  UseFormRegisterReturn,
  UseFormStateReturn,
  useController,
  useFormContext,
} from 'react-hook-form';

interface I_FileControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  name: TName;
  control: Control<TFieldValues>;
  render: ({
    register,
    fieldState,
    formState,
    select,
    remove,
    base64,
  }: {
    register: {
      type: 'file';
      ref: RefCallBack;
      name: TName;
      control: Control<TFieldValues>;
      register: UseFormRegisterReturn<TName>;
      onChange: (...event: any[]) => void;
    };
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
    base64: string | null;
    select: () => void;
    remove: () => void;
  }) => React.ReactElement;
}

const FileController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  render,
  ...props
}: I_FileControllerProps<TFieldValues, TName>) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { resetField, register } = useFormContext();
  const { field, fieldState, formState } = useController({ name, control });
  const [base64, setBase64] = useState<string | null>(null);
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setBase64(await getBase64(e.target.files[0]));
      field.onChange(e.target.files[0]);
    }
  };

  return render({
    register: {
      name,
      type: 'file',
      onChange,
      ref: (instance: HTMLInputElement) => {
        field.ref(instance);
        inputRef.current = instance;
      },
      register: register(name),
      control,
    },
    base64,
    select: () => inputRef.current?.click(),
    remove: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
        resetField(name);
        setBase64(null);
      }
    },
    fieldState,
    formState,
  });
};

export default FileController;
