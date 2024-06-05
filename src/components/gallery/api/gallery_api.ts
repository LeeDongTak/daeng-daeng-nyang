import { axiosValid_API } from '@/api/common/axios_instance';

export const updateGallery = async ({ id, formData }: { id: string; formData: FormData }) => {
  const response = await axiosValid_API.patch(`post/${id}?dataType=formData`, formData);
  return response.data;
};
