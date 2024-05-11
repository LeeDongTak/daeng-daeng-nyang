import GalleryDetail from '@/components/gallery/GalleryDetail';

const GalleryDetailPage = () => {
  // const galleries = useGalleryStore(state => state.galleries);
  // const { setSelectedGallery } = useGalleryStore();

  // 이제 필요없어졌습니다.
  // const selectedGallery = useMemo(() => {
  //   const gallery = data.find(gallery => gallery.id === Number(id));
  //   if (gallery) {
  //     setSelectedGallery(gallery);
  //     return gallery;
  //   }
  //   return null;
  // }, [galleries, id, setSelectedGallery]);
  // const selectedGallery = useGalleryStore(state => state.selectedGallery);
  // if (!selectedGallery) {
  //   return <div>로딩 중입니다~~</div>;
  // }
  return <GalleryDetail />;
};

export default GalleryDetailPage;
