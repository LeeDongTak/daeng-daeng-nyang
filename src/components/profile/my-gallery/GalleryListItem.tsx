import NonImage from '@/components/common/non-image/NonImage';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const GalleryListItem = ({ thumbnail }: { thumbnail: string | null }) => {
  return (
    <div
      className={cn(
        'relative flex justify-center items-center w-[25.6rem] h-[16.6rem] rounded-[3rem] bg-[#e3eff7] overflow-hidden',
      )}
    >
      {thumbnail ? (
        <Image
          src={`${thumbnail}`}
          alt="게시물 썸네일 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <NonImage />
      )}
    </div>
  );
};

export default GalleryListItem;
