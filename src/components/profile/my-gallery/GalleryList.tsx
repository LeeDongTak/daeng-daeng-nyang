import { cn } from '@/lib/utils';
import GalleryListItem from './GalleryListItem';

const GalleryList = () => {
  return (
    <div className={cn('flex flex-wrap gap-[2.4rem] flex-shrink-0 justify-start items-start w-[100%] h-auto')}>
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
      <GalleryListItem />
    </div>
  );
};

export default GalleryList;
