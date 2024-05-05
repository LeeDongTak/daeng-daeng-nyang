import { I_CustomMarkerProps } from '@/types/map/kakao';
import { I_SeoulParkAPI } from '@/types/map/searchArea/seoul_api_type';
import { create } from 'zustand';

interface I_SeoulPark {
  seoulPark: Map<keyof I_SeoulParkAPI, I_CustomMarkerProps[]> | null;
}

const initialValue = {
  seoulPark: null,
};

const useSeoulParkStore = create<I_SeoulPark>()(() => ({
  ...initialValue,
}));

export default useSeoulParkStore;

export const setSeoulPark = (seoulPark: Map<keyof I_SeoulParkAPI, I_CustomMarkerProps[]>) =>
  useSeoulParkStore.setState(state => ({ ...state, seoulPark }));
