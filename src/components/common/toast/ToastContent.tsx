import { cn } from '@/lib/utils';
import { deleteToastItem } from '@/store/common/toast/toast-store';
import { I_ToastInfo, T_VariantType } from '@/types/toast/toast';
import { ReactElement, useEffect, useState } from 'react';
import {
  IoAlertCircleSharp,
  IoCheckmarkCircleSharp,
  IoCloseCircleSharp,
  IoCloseSharp,
  IoInformationCircleSharp,
} from 'react-icons/io5';

const ToastContent = ({ toast }: { toast: I_ToastInfo }) => {
  const [isShowAnimation, setIsShowAnimation] = useState(false);
  const [isHideAnimation, setIsHideAnimation] = useState(false);
  const { id, title, variant, position, closeTimeOut, isCloseButton } = toast;

  //toast의 variant
  const DANGER = 'bg-gradient-to-tr from-[#FF5656] to-[#F88] from-[0.11%] to-[99.87%]';
  const INFO = 'bg-gradient-to-tr from-[#2382F1] to-[#60A9FF] from-[0%] to-[100%]';
  const WARN = 'bg-gradient-to-tr from-[#FFA800] to-[#FFC266] from-[0%] to-[100%]';
  const SUCCESS = 'bg-gradient-to-tr from-[#68CA3A] to-[#B3DB80] from-[0%] to-[100%]';
  const choiceVariant =
    (variant === 'danger' && DANGER) ||
    (variant === 'info' && INFO) ||
    (variant === 'warn' && WARN) ||
    (variant === 'success' && SUCCESS) ||
    ' bg-white';

  // toast가 시작할 때 animation
  const DEFAULT_RIGHT = position?.includes('right') ? 'right' : 'left';
  const DEFAULT_TOP = isShowAnimation ? `top-[0] ${DEFAULT_RIGHT}-[0]` : `top-[-5.5rem] ${DEFAULT_RIGHT}-[0]`;
  const DEFAULT_BOTTOM = isShowAnimation ? `bottom-[0] ${DEFAULT_RIGHT}-[0]` : `bottom-[-5.5rem] ${DEFAULT_RIGHT}-[0]`;
  const choicePosition = position?.includes('bottom') ? DEFAULT_BOTTOM : DEFAULT_TOP;

  // toast가 끝날 때 animation
  const HIDE_TOP_CENTER = 'top-[-5.5rem] left-[0rem]';
  const HIDE_TOP_LEFT = 'top-[0] left-[-35rem]';
  const HIDE_TOP_RIGHT = 'top-[0] right-[-35rem]';
  const HIDE_BOTTOM_LEFT = 'bottom-[0] left-[-35rem]';
  const HIDE_BOTTOM_RIGHT = 'bottom-[0] right-[-35rem]';
  const hideToast =
    (position === 'top-center' && HIDE_TOP_CENTER) ||
    (position === 'top-left' && HIDE_TOP_LEFT) ||
    (position === 'top-right' && HIDE_TOP_RIGHT) ||
    (position === 'bottom-left' && HIDE_BOTTOM_LEFT) ||
    (position === 'bottom-right' && HIDE_BOTTOM_RIGHT) ||
    HIDE_TOP_RIGHT;

  // variant에 따른 icon들
  const ICONS: { [key in T_VariantType]: ReactElement } = {
    info: <IoInformationCircleSharp size={22} color="#fff" />,
    danger: <IoCloseCircleSharp size={22} color="#fff" />,
    warn: <IoAlertCircleSharp size={22} color="#fff" />,
    success: <IoCheckmarkCircleSharp size={22} color="#fff" />,
  };

  // animation
  useEffect(() => {
    setIsShowAnimation(true);
    setTimeout(() => {
      setIsHideAnimation(true);
    }, closeTimeOut);
  }, []);

  return (
    <div className={cn('relative w-[35rem] h-[5.5rem] overflow-hidden')}>
      <div
        className={cn(
          `absolute flex items-center border-black justify-between p-[1.5rem] w-[100%] h-[100%] transition-all duration-300 rounded-[0.5rem] ${choiceVariant} ${
            isHideAnimation ? hideToast : choicePosition
          }`,
        )}
      >
        <div className={cn('flex items-center gap-[1rem]')}>
          {ICONS[variant]}
          <span className={cn(`text-[1.4rem] text-white font-[500]`)}>{title}</span>
        </div>
        {isCloseButton && (
          <IoCloseSharp
            size={22}
            color="#fff"
            onClick={() => {
              setIsHideAnimation(true);
              deleteToastItem(id);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ToastContent;
