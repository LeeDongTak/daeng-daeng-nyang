import { Button } from '@/components/ui/button';
import { hideConfirm } from '@/store/common/modal-store';
import { ModalConfirmTypeOption } from '@/types/modal/modal';

const ConfirmModal = ({ confirmOption }: { confirmOption: ModalConfirmTypeOption }) => {
  const handleClickCancel = () => {
    if (confirmOption.cancelButtonCallback) confirmOption.cancelButtonCallback();
    hideConfirm(confirmOption.id ?? '');
  };

  const handleClickConfirm = () => {
    if (confirmOption.confirmButtonCallback) confirmOption.confirmButtonCallback();
    hideConfirm(confirmOption.id ?? '');
  };

  const handleClickCloseButton = () => {
    hideConfirm(confirmOption.id ?? '');
  };

  return (
    <div className="flex flex-col justify-evenly w-[50rem] max-w-[90vw] h-fit items-end p-8">
      <div className="flex p-[2rem_0_5rem_0] w-full flex-col justify-center items-center gap-12">
        <p className="text-center">{confirmOption.content}</p>
      </div>
      <div className="flex justify-end w-full gap-4">
        <Button variant="secondary" onClick={handleClickCancel}>
          {confirmOption.cancelButtonText ?? '취소'}
        </Button>
        <Button onClick={handleClickConfirm}>{confirmOption.confirmButtonText ?? '확인'}</Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
