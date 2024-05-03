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

  // 페이지마다 내려줄 props 추가해주시면 됩니다.
}

/*
*   "holidayNumber": "2",
"date": "01월 21일(토)",
"name": "설날 연휴",
"anniversary": ""
*/

/**
 *  달력에서 모달 닫기
 */

export interface CloseModalType {
  clickCloseModal: () => void;
}

/**
 * 매출달력 일때
 */
export interface CalendarDataType {
  // sales: number;
  // date: string;
  // min?: boolean;
  // max?: boolean;
  // to_go: IsTakeOutType[] | null;
  // store: IsTakeOutType[] | null;
}
