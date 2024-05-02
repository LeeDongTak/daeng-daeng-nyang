import { create } from 'zustand';

interface I_MapSearch {
  category_type: 'hospital' | 'walk'; // 병원&약국 , 산책

  searchValue: string;
}

const initialValue = {
  category_type: 'hospital',

  searchValue: '',
} as I_MapSearch;

const useSearchLocationStore = create<I_MapSearch>()(() => ({
  ...initialValue,
}));
export default useSearchLocationStore;

export const setSearchType = (category_type: 'hospital' | 'walk') =>
  useSearchLocationStore.setState(state => ({ ...state, category_type }));

export const setSearchValue = (searchValue: string) =>
  useSearchLocationStore.setState(state => ({ ...state, searchValue }));
