import GalleryDetail from '@/components/gallery/GalleryDetail';
import { useGalleryStore } from '@/components/gallery/GalleryMain';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const GalleryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const galleries = useGalleryStore(state => state.galleries);
  const { setSelectedGallery } = useGalleryStore();

  const selectedGallery = useMemo(() => {
    const gallery = galleries.find(gallery => gallery.id === Number(id));
    if (gallery) {
      setSelectedGallery(gallery);
      return gallery;
    }
    return null;
  }, [galleries, id, setSelectedGallery]);
  // const selectedGallery = useGalleryStore(state => state.selectedGallery);
  if (!selectedGallery) {
    return <div>로딩 중입니다~~</div>;
  }
  return <GalleryDetail />;
};

export default GalleryDetailPage;
