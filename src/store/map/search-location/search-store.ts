import { create } from 'zustand';

interface I_MapSearch {
  category_type: 'hospital' | 'walk'; // 병원&약국 , 산책
  searchValue: string;
  api_query: null | string;
  isUsingInnerKakaoApi: boolean;
}

const initialValue = {
  category_type: 'hospital',
  searchValue: '',
  api_query: null,
  isUsingInnerKakaoApi: false,
} as I_MapSearch;

const useSearchLocationStore = create<I_MapSearch>()(() => ({
  ...initialValue,
}));
export default useSearchLocationStore;

export const setSearchType = (category_type: 'hospital' | 'walk') =>
  useSearchLocationStore.setState(state => ({ ...state, category_type }));

export const setSearchValue = (searchValue: string) =>
  useSearchLocationStore.setState(state => ({ ...state, searchValue }));

export const setApiQuery = (api_query: string | null) =>
  useSearchLocationStore.setState(state => ({ ...state, api_query }));

export const setIsUsingInnerKakaoApi = (isUsingInnerKakaoApi: boolean) => {
  if (isUsingInnerKakaoApi === initialValue.isUsingInnerKakaoApi) return;
  useSearchLocationStore.setState(state => ({ ...state, isUsingInnerKakaoApi: isUsingInnerKakaoApi }));
};
