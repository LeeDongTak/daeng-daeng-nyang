import Title from '@/components/common/Title';
import { cn } from '@/lib/utils';

const GalleryTitle = () => {
  return (
    <div className={cn('w-auto h-auto m-0 mb-[1.6rem]')}>
      <Title level={5} className="text-[2.4rem] font-[600]" text="나의 겔러리" />
    </div>
  );
};

export default GalleryTitle;
