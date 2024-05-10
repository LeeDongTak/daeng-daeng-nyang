import { CalendarDataType, CalendarPetDataType } from '@/types/calendar/calendar';
import { create } from 'zustand';

interface DataStore {
  schedulePetData: CalendarPetDataType[];
}

const useSchedulePetStore = create<DataStore>()(() => ({
  schedulePetData: [],
}));

export const setSchedulePetData = (data: CalendarDataType[]) =>
  useSchedulePetStore.setState(state => ({
    ...state,
    schedulePetData: [
      ...data.map(item => ({ label: item.name, value: item.id.toString() })), // 새로운 데이터 추가
    ],
  }));

export const resetSchedulePetData = () =>
  useSchedulePetStore.setState(state => ({
    ...state,
    schedulePetData: [],
  }));

export default useSchedulePetStore;
