import { axiosValid_API } from '../common/axios_instance';

const fetchCalendar = async () => {
  const res = await axiosValid_API.get('schedule');
  return res.data;
};

export { fetchCalendar };
