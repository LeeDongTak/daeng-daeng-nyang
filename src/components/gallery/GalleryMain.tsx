import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
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
  const { data } = useSession();

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
