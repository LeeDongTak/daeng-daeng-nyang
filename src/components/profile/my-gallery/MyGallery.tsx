import { cn } from '@/lib/utils';
import GalleryList from './GalleryList';
import GalleryTitle from './GalleryTitle';

const MyGallery = () => {
  return (
    <div className={cn('w-[100%] h-auto')}>
      <div className={cn('w-[84.6rem] h-auto mx-auto')}>
        <GalleryTitle />
        <GalleryList />
      </div>
    </div>
  );
};

export default MyGallery;
