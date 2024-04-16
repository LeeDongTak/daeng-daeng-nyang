import useToastStore from '@/store/common/toast/toast-store';
import ToastGroup from './ToastGroup';

const Toast = () => {
  const { toastGroup } = useToastStore();
  const TOP_CENTER = 'top-0 left-[50%] translate-x-[-50%]';
  const TOP_LEFT = 'top-0 left-0';
  const TOP_RIGHT = 'top-0 right-0';
  const BOTTOM_LEFT = 'bottom-0 left-0';
  const BOTTOM_RIGHT = 'bottom-0 right-0';

  const topCenterGroup = toastGroup.filter(toast => toast.position === 'top-center');
  const topLeftGroup = toastGroup.filter(toast => toast.position === 'top-left');
  const topRightGroup = toastGroup.filter(toast => toast.position === 'top-right');
  const bottomLeftGroup = toastGroup.filter(toast => toast.position === 'bottom-left');
  const bottomRightGroup = toastGroup.filter(toast => toast.position === 'bottom-right');

  return (
    <>
      {topCenterGroup.length > 0 && <ToastGroup toastGroup={topCenterGroup} groupPosition={TOP_CENTER} />}
      {topLeftGroup.length > 0 && <ToastGroup toastGroup={topLeftGroup} groupPosition={TOP_LEFT} />}
      {topRightGroup.length > 0 && <ToastGroup toastGroup={topRightGroup} groupPosition={TOP_RIGHT} />}
      {bottomLeftGroup.length > 0 && <ToastGroup toastGroup={bottomLeftGroup} groupPosition={BOTTOM_LEFT} />}
      {bottomRightGroup.length > 0 && <ToastGroup toastGroup={bottomRightGroup} groupPosition={BOTTOM_RIGHT} />}
    </>
  );
};

export default Toast;
