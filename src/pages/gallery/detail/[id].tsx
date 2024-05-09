import GalleryDetail from '@/components/gallery/GalleryDetail';
import { useGalleryStore } from '@/components/gallery/GalleryMain';
import { useRouter } from 'next/router';

const GalleryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const galleries = useGalleryStore(state => state.galleries);

  const gallery = galleries.find(gallery => gallery.id === Number(id));

  if (!gallery) {
    return <div>로딩 중 데스</div>;
  }
  return <GalleryDetail gallery={gallery} />;
};

export default GalleryDetailPage;
