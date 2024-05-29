<<<<<<< HEAD
import { axiosValid_API } from '@/api/common/axios_instance';
=======
>>>>>>> 72690e27d690f8480ab0ef21faf227043ffb5433
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import GalleryList from './GalleryList';
import { I_GalleryData } from './type/gallery';

interface I_GalleryDataState {
  galleries: I_GalleryData[];
  setGalleries: (galleries: I_GalleryData[]) => void;
  selectedGallery: I_GalleryData | null;
  setSelectedGallery: (gallery: I_GalleryData | null) => void;
}

const GalleryMain = () => {
  const router = useRouter();
<<<<<<< HEAD
  const { data } = useSession();
  const test = async () => {
    const result = await axiosValid_API.get('/post/100');
    return result;
  };
  useEffect(() => {
    test().then(a => console.log(a));
  }, []);
=======
  const { data: isLogin } = useSession();
>>>>>>> 72690e27d690f8480ab0ef21faf227043ffb5433

  const navigateToAddGallery = () => {
    router.push('/gallery/add');
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-4">{data && <button onClick={navigateToAddGallery}>글 등록하기</button>}</div>
      <GalleryList />
    </div>
  );
};

export default GalleryMain;
