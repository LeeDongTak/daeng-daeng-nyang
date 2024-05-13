export type T_VariantType = 'danger' | 'info' | 'warn' | 'success';
export type T_PositionType = 'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | null;

export interface I_ToastInfo {
  id?: string;
  title: string;
  variant: T_VariantType;
  position?: T_PositionType;
  closeTimeOut?: number;
  isCloseButton?: boolean;
}
