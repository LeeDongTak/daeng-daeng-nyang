import { Button } from '@/components/ui/button';
import { hideAlert } from '@/store/common/modal-store';
import { ModalAlertTypeOption } from '@/types/modal/modal';
import { useEffect } from 'react';

const AlertModal = ({ alert }: { alert: ModalAlertTypeOption }) => {
  useEffect(() => {
    if (alert.timeout) {
      setTimeout(() => {
        hideAlert(alert.id ?? '');
      }, alert.timeout);
    }
  });

  return (
    <div className="flex flex-col justify-evenly w-[85vw] h-fit p-8 items-center gap-8">
      <p className="text-center">{alert.content}</p>
      {alert.showButton && (
        <Button onClick={hideAlert.bind(null, alert.id ?? '')} text={alert.buttonText ?? '확인'}></Button>
      )}
    </div>
  );
};

export default AlertModal;
