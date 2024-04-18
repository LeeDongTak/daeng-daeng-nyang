import useToastStore, { addToastGroup, deleteToastGroup } from '@/store/common/toast/toast-store';
import { I_ToastInfo } from '@/types/toast/toast';
import { nanoid } from 'nanoid';
import { useRef } from 'react';

/**
 * toast/ui 사용법
 * // 컴포넌트 에 변수로 입력할 겻
 * const { toast } = useToast();
 *
 * // onclick함수에 입력할 것
 * toast({
 *   title: 'toast메시지를 입력하세요',
 *   variant: 'warn',
 *   position: 'top-right',
 *   closeTimeOut: 2000,
 *   closeTimeOut: false,
 * });
 *
 * title: toast에 입력할 제목을 입력하면됩니다.
 * variant: toast의 속성입니다. 'danger' | 'info' | 'warn' | 'success'이 있고
 *   각각의 속성마다 다른 디자인이 출력됩니다.
 * position: toast가 렌더링될 위치 입니다.
 *   'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'이 있고
 *   default는 'top-right'입니다.
 * closeTimeOut: toast가 닫히는 시간입니다. default는 2000입니다.
 * isCloseButton: toast 닫기 버튼 입니다. default는 false입니다.
 *
 *
 * type
 *   title: string,
 *   variant: 'danger' | 'info' | 'warn' | 'success',
 *   position: 'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
 *   closeTimeOut: number,
 *   closeTimeOut: boolean,
 *
 *
 * @returns toast
 */
const useToast = () => {
  const toastId = nanoid();
  let timer = useRef<number | null>(null);
  const { toastGroup } = useToastStore();

  /**
   * @param delay
   * 모든toast의 animation이 끝난 후 컴포넌트를 unMount하기 위해 상태를 초기화 합니다.
   */
  const debounceDeleteToastGroup = (delay?: number) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(
      () => {
        deleteToastGroup();
      },
      !delay ? 2500 : delay + 500,
    );
  };

  /**
   * @param toastInfo
   * toast를 실행하는 함수 입니다.
   */
  const toast = (toastInfo: I_ToastInfo) => {
    addToastGroup({ id: toastId, position: null, closeTimeOut: 2000, isCloseButton: false, ...toastInfo });

    debounceDeleteToastGroup(toastInfo.closeTimeOut);
  };

  return { toast };
};

export default useToast;
