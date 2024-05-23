import GalleryRegist from '@/components/gallery/gallery-form/GalleryRegist';
import { I_GalleryData } from '@/components/gallery/type/gallery';
import Head from 'next/head';
import { useRouter } from 'next/router';

const AddGalleryPage = () => {
  const router = useRouter();

  const handleAddGallery = (newGallery: I_GalleryData) => {
    // 갤러리 페이지로 이동
    router.push('/gallery');
  };

  return (
    <>
      <Head>
        <title>댕댕냥 - 갤러리 등록</title>
      </Head>
      <GalleryRegist onAddGallery={handleAddGallery} />
    </>
  );
};

export default AddGalleryPage;
