import { axiosValid_API } from '@/api/common/axios_instance';
import { T_gallerySchema } from '@/components/gallery/gallery-form/GalleryRegist';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const useAddGalleryMutation = () => {
  const { push } = useRouter();
  const client = useQueryClient();
  const didMountRef = useRef(false);

  const addGallery = async (values: T_gallerySchema) => {
    try {
      const data = {
        title: values.title,
        content: values.description,
        tags: values.tags,
        images: {
          file: await Promise.all(values.images.map(async image => await getBase64(image as File))),
          fileName: values.images.map((image: unknown) => (image as File).name),
        },
      };

      await axiosValid_API.post(`post?dataType=formData`, data);
      push('/gallery');
      console.log(response.data);
    } catch (error) {
      console.error('갤러리 등록 실패여:', error);
    }
  };

  const { isPending, mutate, isError, error } = useMutation({
    mutationFn: addGallery,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['galleryUpload'] });
    },
  });

  useEffect(() => {
    if (didMountRef.current) {
      console.log(isPending);
    }
    didMountRef.current = true;
  }, [isPending, isError, Error]);

  return { isPending, mutate };
};

export default useAddGalleryMutation;
