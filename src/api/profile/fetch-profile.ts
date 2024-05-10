import { axiosValid_API } from '../common/axios_instance';

const fetchProfile = async () => {
  const res = await axiosValid_API.get('users/mypage');
  return res.data.user;
};

export { fetchProfile };
