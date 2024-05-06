import { Dayjs } from 'dayjs';

type CalendarModeType = 'MINI_MODE' | 'BIG_MODE';
type CalendarPageType = 'STATUS_PAGE' | 'CALENDAR_PAGE' | 'ORDER_START_PAGE' | 'ORDER_END_PAGE';

// Calendar Component
interface CalendarType {
  children?: React.ReactNode;
  mode: CalendarModeType;
  page?: CalendarPageType;
}

interface CalendarCellType {
  mode: CalendarModeType;
  page?: CalendarPageType;
}

/**
 * Cell -> CellItem에서 기본적으로 내려주는 props 입니다.
 * CellItem에서 click 이벤트 조건부 및 달력의 날짜의 css처리를 합니다.
 * 여기에 type을 추가하시면 됩니다.
 */
interface CellItemProps {
  day: Dayjs;
  selectDayHandler?: (day: Dayjs) => () => void;
  mode: CalendarModeType;
  page?: CalendarPageType;
  id: string;
  schedulesData?: ScheduleDataType[];

  // 페이지마다 내려줄 props 추가해주시면 됩니다.
}

/**
 *  달력에서 모달 닫기
 */

export interface CloseModalType {
  clickCloseModal: () => void;
}

/**
 * 달력 데이타 바인딩 처리
 */
export interface CalendarDataType {
  schedule: ScheduleDataType[];
  id: number;
  dogNm: string;
}

export interface ScheduleDataType {
  date: string;
  category: string;
  content: string;
  id: number;
  petId: number;
  title: string;
  userId: number;
}
