import { cn } from '@/lib/utils';
import { I_ToastInfo } from '@/types/toast/toast';
import ToastContent from './ToastContent';

interface I_ToastGroupType {
  toastGroup: I_ToastInfo[];
  groupPosition: string;
}

const ToastGroup = ({ toastGroup, groupPosition }: I_ToastGroupType) => {
  return (
    <div className={cn(`flex flex-col fixed m-[1rem] gap-[1rem] z-500 ${groupPosition}`)}>
      {toastGroup?.map(item => (
        <ToastContent key={item.id} toast={item} />
      ))}
    </div>
  );
};

export default ToastGroup;
