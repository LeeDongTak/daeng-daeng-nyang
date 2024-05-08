import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GalleryList from './GalleryList';
import { I_GalleryData } from './type/gallery';

const GalleryPage = () => {
  const [galleries, setGalleries] = useState<I_GalleryData[]>([]);
  const router = useRouter();
  const navigateToAddGallery = () => {
    router.push('/gallery/add');
  };
  useEffect(() => {
    const storedGalleries = localStorage.getItem('galleries');
    if (storedGalleries) {
      setGalleries(JSON.parse(storedGalleries));
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-4">
        <button onClick={navigateToAddGallery}>글 등록하기</button>
      </div>
      <GalleryList galleries={galleries} />
    </div>
  );
};

export default GalleryPage;
