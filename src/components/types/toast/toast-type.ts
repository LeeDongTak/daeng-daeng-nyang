interface I_ToastValuesTypes {
  id: string;
  title: string;
  variant: 'danger' | 'info' | 'warn' | 'success';
  closeTimeOut: number;
  isCloseButton: boolean;
}