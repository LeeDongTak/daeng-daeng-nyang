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

export const deleteScheduleAPI = async (id: number) => {
  try {
    const { data } = await axiosValid_API.delete(`schedule/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

interface ParamType {
  changeValueTarget: T_ScheduleSchema;
  id: number | undefined;
}

export const updateScheduleAPI = async (param: ParamType) => {
  try {
    const { data } = await axiosValid_API.patch(`schedule/${param.id}`, param.changeValueTarget);
    return data;
  } catch (error) {
    throw error;
  }
};
