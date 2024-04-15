/**
 * @explain cva의 props에 null | undefined를 삭제 하는 generator입니당
 * @example type T_RemoveNullableCVAProps = T_CVARequiredProperty<VariantProps<typeof CVA_Object>>
 */
export type T_CVARequiredProperty<T> = Required<{ [P in keyof T]: NonNullable<T[P]> }>;
