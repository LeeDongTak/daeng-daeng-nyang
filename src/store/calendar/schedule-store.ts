import { ScheduleDataType } from '@/types/calendar/calendar';
import { create } from 'zustand';

interface DataStore {
  scheduleListData: ScheduleDataType[];
}

const useScheduleListStore = create<DataStore>()(() => ({
  scheduleListData: [],
}));

export const setScheduleListData = (data: ScheduleDataType[]) =>
  useScheduleListStore.setState(state => ({
    ...state,
    scheduleListData: data,
  }));

export const resetScheduleListData = () =>
  useScheduleListStore.setState(state => ({
    ...state,
    scheduleListData: [],
  }));

export default useScheduleListStore;
