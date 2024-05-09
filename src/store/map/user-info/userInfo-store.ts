import { I_PetInfo } from '@/types/map/pet-info/pet-info';
import { create } from 'zustand';

interface I_Map_PetInfoStore {
  pets: I_PetInfo[] | null;
}

const initialValue = {
  pets: null,
};
const useMap_PetStore = create<I_Map_PetInfoStore>()(() => ({
  ...initialValue,
}));

export default useMap_PetStore;

export const setUseMap_PetInfo = (pets: I_PetInfo[]) =>
  useMap_PetStore.setState(state => ({
    ...state,
    pets: pets,
  }));
