import { CloseModalType } from '@/types/calendar/calendar';

export const ModalCalendarHeader = ({ clickCloseModal }: CloseModalType) => {
  return (
    <div>
      <h2>스케쥴 현황</h2>
      <button onClick={clickCloseModal}>x</button>
    </div>
  );
};
