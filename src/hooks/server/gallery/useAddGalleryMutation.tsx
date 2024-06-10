import { axiosValid_API } from '@/api/common/axios_instance';
import { T_gallerySchema } from '@/components/gallery/gallery-form/GalleryRegist';
import useToast from '@/hooks/client/useToast';
import { RedirectLoginPage, getBase64 } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const useAddGalleryMutation = () => {
  const client = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();
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
      router.push('/gallery');
    } catch (error) {
      console.error(error);
    }
  };

  const { isPending, mutate, isError, error } = useMutation({
    mutationFn: addGallery,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['galleryUpload'] });
    },
  });

  useEffect(() => {
    (async () => {
      if (await RedirectLoginPage(isError, error)) {
        toast({
          title: '로그인이 되어있지 않습니다. 로그인을 해주세요',
          variant: 'danger',
          position: 'top-center',
          closeTimeOut: 2000,
        });

        router.push('/auth/login');
      }
    })();
  }, [isError, error]);

  return { isPending, mutate };
};

export default useAddGalleryMutation;
