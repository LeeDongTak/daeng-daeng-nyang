import { I_CustomMarkerProps } from '@/types/map/kakao';
import { T_LocationType } from '@/types/map/searchArea/seoul_api_type';
import { create } from 'zustand';

interface I_SeoulPark {
  seoulPark: Map<T_LocationType, I_CustomMarkerProps[]> | null;
}

const initialValue = {
  seoulPark: null,
};

const useSeoulParkStore = create<I_SeoulPark>()(() => ({
  ...initialValue,
}));

export default useSeoulParkStore;

export const setSeoulPark = (seoulPark: Map<T_LocationType, I_CustomMarkerProps[]>) =>
  useSeoulParkStore.setState(state => ({ ...state, seoulPark }));
