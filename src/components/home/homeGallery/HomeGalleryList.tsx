import { cn } from '@/lib/utils';
import { homeGalleryInfo } from './Home-gallery-info';
import HomeGalleryItem from './HomeGalleryItem';

const HomeGalleryList = () => {
  return (
    <div className={cn('flex gap-[2.4rem] justify-start items-start flex-shrink-0 w-[auto] h-[auto] animate-flow')}>
      {homeGalleryInfo?.map((item, index) => {
        return <HomeGalleryItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default HomeGalleryList;
