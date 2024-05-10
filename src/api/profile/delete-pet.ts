import { axiosValid_API } from '../common/axios_instance';

export const deletePet = async (petId: string | number) => {
  try {
    const res = await axiosValid_API.delete(`pet/${petId}`);

    return res;
  } catch (error) {
    console.error(error);
  }
};
