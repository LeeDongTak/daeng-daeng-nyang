import { I_ToastInfo } from '@/types/toast/toast';
import { create } from 'zustand';


interface I_toastGroup {
	toastGroup: I_ToastInfo[];
}
const useToastStore = create<I_toastGroup>()(() => ({
  toastGroup: [],
}))

export const addToastGroup = (toast: I_ToastInfo) => {
  useToastStore.setState(state => ({ toastGroup: [...state.toastGroup, toast] }));
};

export const deleteToastGroup = () => {
  useToastStore.setState(state => ({ toastGroup: [] }));
};

export const deleteToastItem = (toastId?: string) => {
  if (!toastId) return
  const timer = setTimeout(()=>{
    useToastStore.setState(state => ({ toastGroup: [...state.toastGroup.filter((toast)=> toast.id !== toastId)] }));
    clearTimeout(timer);
  },500);
};

export default useToastStore