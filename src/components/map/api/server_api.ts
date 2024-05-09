import { axiosValid_API } from '@/api/common/axios_instance';
import { T_ScheduleSchema } from '../form/validator/schedule-validator';

export const getUserInfo = async () => {
  try {
    const { data: user } = await axiosValid_API.get('/users/mypage');
    return user;
  } catch (err) {
    // error 처리 명세서가지고 해야함!!
    console.log(err);
    return null;
  }
};

export const addScheduleAxios = async (value: T_ScheduleSchema) => {
  try {
    const { data } = await axiosValid_API.post('schedule', value);
    return data;
  } catch (err) {
    // error 처리 명세서가지구 해야해욤!!
    throw err;
  }
};
