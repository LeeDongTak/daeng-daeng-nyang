import { axiosValid_API } from '@/api/common/axios_instance';

export const getUserInfo = async () => {
  try {
    const { data: user } = await axiosValid_API.get('/users/mypage');
    return user;
  } catch (err) {
    // error 처리 명세서가지고 해야함!!
    console.log(err);
  }
};
