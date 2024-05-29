import { axiosValid_API } from '@/api/common/axios_instance';

export const updateGallery = async ({ id, formData }: { id: string; formData: FormData }) => {
  const response = await axiosValid_API.patch(`post/${id}`, formData);
  return response.data;
};
