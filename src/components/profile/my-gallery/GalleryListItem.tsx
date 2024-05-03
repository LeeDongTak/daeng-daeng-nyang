import NonImage from '@/components/common/non-image/NonImage';
import { cn } from '@/lib/utils';

const GalleryListItem = () => {
  return (
    <div className={cn('flex justify-center items-center w-[26.6rem] h-[17.6rem]')}>
      <NonImage iconWidth="26.6rem" iconHeight="17.6rem" />
    </div>
  );
};

export default GalleryListItem;
