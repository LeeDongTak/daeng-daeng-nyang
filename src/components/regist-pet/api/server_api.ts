import { axiosAPI } from '@/api/common/axios_instance';
import { T_PetRegistSchema } from '../validator/pet-regist-validator';

export const addPetInfo = async (values: T_PetRegistSchema) => {
  try {
    const { data } = await axiosAPI.post('/pet', values);
    return data;
  } catch (error) {
    throw error;
  }
};
