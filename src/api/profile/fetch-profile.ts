import axios from 'axios';

interface I_paramsType {
  authorization: string;
  refreshtoken: string;
}

const fetchProfile = async (tokens: I_paramsType) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/users/mypage`, { headers: tokens });
  return res.data.user;
};

export { fetchProfile };
