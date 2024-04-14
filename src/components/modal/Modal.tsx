import ModalContent from '@/components/modal/ModalContent';
import AlertModal from '@/components/modal/default/AlertModal';
import ConfirmModal from '@/components/modal/default/ConfirmModal';
import useModalStore, { hideAlert, hideConfirm, hideModal } from '@/store/common/modal-store';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

/**
 * 모달 컴포넌트
 * 레이어 순서는 Alert > Confirm > Component 순 입니다.
 * @constructor
 */
const Modal = () => {
  const { modalList, alertList, confirmList } = useModalStore();
  // 모달 바깥쪽 Ref 지정
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClickOverlay = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      let id = '';
      if (alertList && alertList?.length > 0) {
        id = alertList.pop()?.id ?? '';
        hideAlert(id);
      } else if (confirmList && confirmList?.length > 0) {
        id = confirmList.pop()?.id ?? '';
        hideConfirm(id);
      } else if (modalList && modalList?.length > 0) {
        id = modalList.pop()?.id ?? '';
        hideModal(id);
      }
    }
  };

  return (
    <>
      {((modalList && modalList.length > 0) ||
        (alertList && alertList.length > 0) ||
        (confirmList && confirmList.length > 0)) && (
        <motion.div
          className="grid fixed grid-rows-[repeat(3,1fr)] grid-cols-[repeat(3,1fr)] top-0 left-0 w-full h-full z-[100] justify-items-center items-center touch-none bg-white/80"
          onClick={handleClickOverlay}
          ref={overlayRef}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 0.3 }}
        >
          {modalList?.map(modal => (
            <ModalContent
              key={modal.id}
              id={modal.id}
              className={
                (alertList && alertList?.length > 0) || (confirmList && confirmList.length > 0) ? 'opacity-10' : ''
              }
            >
              {React.cloneElement(modal.child, { modalId: modal.id })}
            </ModalContent>
          ))}
          {confirmList?.map(confirm => (
            <ModalContent
              key={confirm.id}
              id={confirm.id}
              className={alertList && alertList.length > 0 ? 'opacity-10' : ''}
            >
              <ConfirmModal confirmOption={confirm} />
            </ModalContent>
          ))}
          {alertList?.map(alert => (
            <ModalContent id={alert.id} key={alert.id}>
              <AlertModal alert={alert} />
            </ModalContent>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Modal;
