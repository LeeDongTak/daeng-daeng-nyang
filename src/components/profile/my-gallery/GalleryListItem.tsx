import NonImage from '@/components/common/non-image/NonImage';
import { cn } from '@/lib/utils';

const GalleryListItem = () => {
  return (
    <div className={cn('flex justify-center items-center w-[26.6rem] h-[17.6rem]')}>
      <NonImage width="26.6rem" height="17.6rem" />
    </div>
  );
};

export default GalleryListItem;
