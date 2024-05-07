import AddGallery from '@/components/gallery/AddGallery';
import { I_GalleryData } from '@/components/gallery/type/gallery';
import { useRouter } from 'next/router';

const AddGalleryPage = () => {
  const router = useRouter();

  const handleAddGallery = (newGallery: I_GalleryData) => {
    // 로컬 스토리지에서 기존 갤러리 데이터 가져오기
    const storedGalleries = localStorage.getItem('galleries');
    const galleries = storedGalleries ? JSON.parse(storedGalleries) : [];

    // 새로운 갤러리 데이터 추가
    const updatedGalleries = [...galleries, newGallery];

    // 로컬 스토리지에 업데이트된 갤러리 데이터 저장
    localStorage.setItem('galleries', JSON.stringify(updatedGalleries));

    // 갤러리 페이지로 이동
    router.push('/gallery');
  };

  return <AddGallery onAddGallery={handleAddGallery} />;
};

export default AddGalleryPage;
