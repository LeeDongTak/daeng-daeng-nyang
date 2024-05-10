import { axiosValid_API } from '@/api/common/axios_instance';
import { T_ScheduleSchema } from '../validator/schedule-validator';

export const addScheduleAPI = async (values: T_ScheduleSchema) => {
  try {
    const { data } = await axiosValid_API.post('schedule', values);
    return data;
  } catch (error) {
    throw error;
  }
};
