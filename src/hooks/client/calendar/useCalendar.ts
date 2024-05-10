import useCalendarState, { setCalendarCurrentDate } from '@/store/calendar/calendar-store';
import useScheduleStore from '@/store/calendar/data-store';
import useScheduleFormStore, { setScheduleFormData } from '@/store/calendar/form-store';
import { setScheduleListData } from '@/store/calendar/schedule-store';
import { CalendarDataType } from '@/types/calendar/calendar';
import { MouseEvent, useCallback } from 'react';

export const useCalendar = () => {
  const currentDate = useCalendarState(state => state.currentDate);
  const calendarBindingData = useScheduleStore(state => state.calendarBindingData);
  const scheduleFormStore = useScheduleFormStore();

  // 날짜 클릭하면 그 날짜를 기준으로 1주일 전꺼 까지 Data를 불러오는 함수입니다.
  const clickPreMonthHandler = useCallback(() => {
    setCalendarCurrentDate(currentDate.subtract(1, 'month'));
  }, [currentDate]);
  //다음 달로 이동
  const clickNextMonthHandler = useCallback(() => {
    setCalendarCurrentDate(currentDate.add(1, 'month'));
  }, [currentDate]);

  // 모달 클릭시 해당 날에 일정 확인
  const clickShowScheduleModal = (e: MouseEvent<HTMLDivElement>) => {
    const targetDiv = (e.target as Element).closest('div');

    if (!targetDiv) return null;
    const targeDate = targetDiv.id;
    setScheduleFormData({ ...scheduleFormStore, date: targeDate });
    const scheduleData = calendarBindingData?.map(item =>
      item.schedule.filter(target => target.date.split('T')[0] === targeDate),
    );
    const schedulesDataFlat = scheduleData.flat();
    if (!schedulesDataFlat) return null;
    setScheduleListData(schedulesDataFlat);
  };

  // 추가나 삭제 수정시 모달창 업데이트
  const updateScheduleModal = (schedule: CalendarDataType[]) => {
    if (!schedule) return;
    const scheduleData = schedule?.map(item =>
      item.schedule.filter(target => target.date.split('T')[0] === scheduleFormStore.date),
    );
    const schedulesDataFlat = scheduleData.flat();
    if (!schedulesDataFlat) return null;
    setScheduleListData(schedulesDataFlat);
  };

  return {
    clickPreMonthHandler,
    clickNextMonthHandler,
    clickShowScheduleModal,
    updateScheduleModal,
  };
};
