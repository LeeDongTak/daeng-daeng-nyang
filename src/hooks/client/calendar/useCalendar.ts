import useCalendarState, { setCalendarCurrentDate } from '@/store/calendar/calendar-store';
import { useCallback } from 'react';

export const useCalendar = () => {
  const currentDate = useCalendarState(state => state.currentDate);
  //   const selectedDate = useDayState((state) => state.selectedDate);

  // 날짜 클릭하면 그 날짜를 기준으로 1주일 전꺼 까지 Data를 불러오는 함수입니다.
  const clickPreMonthHandler = useCallback(() => {
    setCalendarCurrentDate(currentDate.subtract(1, 'month'));
  }, [currentDate]);
  //다음 달로 이동
  const clickNextMonthHandler = useCallback(() => {
    setCalendarCurrentDate(currentDate.add(1, 'month'));
  }, [currentDate]);

  return {
    clickPreMonthHandler,
    clickNextMonthHandler,
  };
};
