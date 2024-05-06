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

// export const setScheduleSum = (data: { total: number; date: string }[] | null) =>
//   useScheduleStore.setState(state => ({
//     ...state,
//     scheduleSum: data ? data.reduce((acc, cur) => acc + cur.total, 0) : null,
//   }));

export const resetCalendarBindingData = () =>
  useScheduleStore.setState(state => ({
    ...state,
    calendarBindingData: [],
  }));

// export const resetScheduleSum = () =>
//   useScheduleStore.setState(state => ({
//     ...state,
//     scheduleSum: null,
//   }));

export default useScheduleStore;
