import { CloseModalType } from '@/types/calendar/calendar';

export const ModalCalendarFooter = ({ clickCloseModal }: CloseModalType) => {
  return <div onClick={clickCloseModal}>닫기</div>;
};
