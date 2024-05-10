import { cn } from '@/lib/utils';
import { I_Post } from '@/types/profile/profile';
import GalleryListItem from './GalleryListItem';

const GalleryList = ({ posts }: { posts: I_Post[] }) => {
  return (
    <div
      className={cn(
        `flex flex-wrap justify-start items-start gap-[2.4rem] w-[100%]
       h-[44.2rem] flex-shrink-0 overflow-y-scroll scrollbar pr-[1.8rem]
       scrollbar-w-4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
       scrollbar-track-white scrollbar-thumb-[#191919] scroll-[100rem]`,
      )}
    >
      {posts.map(item => (
        <GalleryListItem key={item.id} galleryId={item.id} thumbnail={item.thumbnail} />
      ))}
    </div>
  );
};

export default GalleryList;
