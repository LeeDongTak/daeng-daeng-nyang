import { create } from 'zustand';

interface I_Map_PetInfoStore {
  age: string;
  birth: Date;
  breed: string;
  createdAt: Date;
  deleteAt: null | Date;
  gender: string;
  id: string;
  name: string;
  profileImage: string;
  updateAt: Date;
  userId: number;
}
[];

const initialValue = null;
const useMap_PetStore = create<I_Map_PetInfoStore | null>()(state => initialValue);

export default useMap_PetStore;

export const setUseMap_PetInfo = (user_pet: I_Map_PetInfoStore | null) =>
  useMap_PetStore.setState(() => ({
    ...user_pet,
  }));
