import GalleryRegist from '@/components/gallery/gallery-form/GalleryRegist';
import { I_GalleryData } from '@/components/gallery/type/gallery';
import { useRouter } from 'next/router';

const AddGalleryPage = () => {
  const router = useRouter();

  const handleAddGallery = (newGallery: I_GalleryData) => {
    // 갤러리 페이지로 이동
    router.push('/gallery');
  };

  return <GalleryRegist onAddGallery={handleAddGallery} />;
};

export default AddGalleryPage;
