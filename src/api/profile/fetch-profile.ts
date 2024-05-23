import { axiosValid_API } from '../common/axios_instance';

const fetchProfile = async () => {
  try {
    const res = await axiosValid_API.get('users/mypage');
    return res.data.user;
  } catch (error) {
    console.error(error);
  }
};
export { fetchProfile };
