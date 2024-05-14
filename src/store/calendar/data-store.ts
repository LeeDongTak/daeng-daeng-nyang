import { CalendarDataType } from '@/types/calendar/calendar';
import { create } from 'zustand';

interface DataStore {
  calendarBindingData: CalendarDataType[];
}

const useScheduleStore = create<DataStore>()(() => ({
  calendarBindingData: [],
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
