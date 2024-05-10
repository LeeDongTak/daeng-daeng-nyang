import { CalendarDataType } from '@/types/calendar/calendar';
import { create } from 'zustand';

interface DataStore {
  calendarBindingData: CalendarDataType[];
  scheduleSum: number | null;
}

const useScheduleStore = create<DataStore>()(() => ({
  calendarBindingData: [],
  scheduleSum: null,
}));

export const setCalendarBindingData = (data: CalendarDataType[]) =>
  useScheduleStore.setState(state => ({
    ...state,
    calendarBindingData: data,
  }));

export const resetCalendarBindingData = () =>
  useScheduleStore.setState(state => ({
    ...state,
    calendarBindingData: [],
  }));

export default useScheduleStore;
