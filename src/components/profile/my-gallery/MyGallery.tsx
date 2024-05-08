import { cn } from '@/lib/utils';
import { I_Post } from '@/types/profile/profile';
import GalleryList from './GalleryList';
import GalleryTitle from './GalleryTitle';

const MyGallery = ({ posts }: { posts: I_Post[] }) => {
  return (
    <div className={cn('w-[100%] h-auto')}>
      <div className={cn('w-[84.6rem] h-auto mx-auto')}>
        <GalleryTitle />
        <GalleryList posts={posts} />
      </div>
    </div>
  );
};

export default MyGallery;
