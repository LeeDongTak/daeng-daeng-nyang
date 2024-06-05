import { axiosValid_API } from '@/api/common/axios_instance';
import { getBase64 } from '@/lib/utils';
import { T_PetRegistSchema } from '../validator/pet-regist-validator';

export const addPetInfo = async (values: T_PetRegistSchema) => {
  try {
    const { data } = await axiosValid_API.post(`/pet?dataType=formData`, {
      ...values,
      file: {
        file: getBase64(values.file as File),
        fileName: values.file?.name ?? '',
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
