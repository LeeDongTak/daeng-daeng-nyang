import { getBase64 } from '@/lib/utils';
import { ChangeEvent, useRef, useState } from 'react';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseControllerProps,
  UseFormStateReturn,
  useController,
  useFormContext,
} from 'react-hook-form';

interface I_FileControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  render: ({
    field,
    fieldState,
    formState,
    select,
    remove,
    base64,
  }: {
    field: ControllerRenderProps<TFieldValues, TName> & { type: 'file' };
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
    base64: unknown;
    select: () => void;
    remove: () => void;
  }) => React.ReactElement;
}

const FileController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  render,
  ...props
}: I_FileControllerProps<TFieldValues, TName>) => {
  const { control, name, defaultValue } = props;
  const inputRef = useRef<HTMLElement | null>(null);
  const { setValue } = useFormContext();
  const { field, fieldState, formState } = useController({ name, control });
  const [base64, setBase64] = useState<unknown>(defaultValue ?? null);
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setBase64(await getBase64(e.target.files[0]));
      field.onChange(e.target.files[0]);
    }
  };

  return render({
    field: {
      ...field,
      name,
      type: 'file',
      onChange,
      ref: (instance: HTMLElement) => {
        field.ref(instance);
        inputRef.current = instance;
      },
    },
    base64,
    select: () => inputRef.current?.click(),
    remove: () => {
      setValue(name, null);
      setBase64(null);
    },
    fieldState,
    formState,
  });
};

export default FileController;
