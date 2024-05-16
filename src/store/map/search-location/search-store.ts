import { T_LocationType } from '@/types/map/searchArea/seoul_api_type';
import { create } from 'zustand';

interface I_MapSearch {
  category_type: 'hospital' | 'walk'; // 병원&약국 , 산책
  searchValue: string;
  api_query: null | T_LocationType;
  isUsingInnerKakaoApi: boolean;
  isRequestAPI: boolean;
}

const initialValue = {
  category_type: 'hospital',
  searchValue: '',
  api_query: null,
  isUsingInnerKakaoApi: false,
  isRequestAPI: false,
} as I_MapSearch;

const useSearchLocationStore = create<I_MapSearch>()(() => ({
  ...initialValue,
}));
export default useSearchLocationStore;

export const setSearchType = (category_type: 'hospital' | 'walk') =>
  useSearchLocationStore.setState(state => ({ ...state, category_type }));

export const setSearchValue = (searchValue: string) =>
  useSearchLocationStore.setState(state => ({ ...state, searchValue }));

export const setApiQuery = (api_query: T_LocationType | null) =>
  useSearchLocationStore.setState(state => ({ ...state, api_query }));

export const setIsUsingInnerKakaoApi = (isUsingInnerKakaoApi: boolean) =>
  useSearchLocationStore.setState(state => ({ ...state, isUsingInnerKakaoApi }));

export const setIsRequestAPI = (isRequestAPI: boolean) =>
  useSearchLocationStore.setState(state => ({ ...state, isRequestAPI }));
