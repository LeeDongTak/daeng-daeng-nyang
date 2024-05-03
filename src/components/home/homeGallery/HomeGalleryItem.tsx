import { cn } from '@/lib/utils';
import { I_HomeGalleryInfo } from '@/types/home/home';
import Image from 'next/image';

interface PropsType {
  item: I_HomeGalleryInfo;
}

const HomeGalleryItem = ({ item }: PropsType) => {
  const { image, title, name, date } = item;
  return (
    <div className={cn('w-[30.2rem] h-[auto] bg-white rounded-[3rem] p-[2rem]')}>
      <div className={cn('rounded-[3rem] mb-[2.4rem]')}>
        <Image src={image} alt="겔러리 이미지" />
      </div>
      <div className={cn('text-[1.8rem] font-bold whitespace-nowrap text-ellipsis overflow-hidden mb-[0.8rem]')}>
        {title}
      </div>
      <div className={cn('flex justify-between')}>
        <p className={cn('text-[1.6rem] font-semibold')}>{name}</p>
        <p className={cn('text-[1.4rem]')}>{date}</p>
      </div>
    </div>
  );
};

export default HomeGalleryItem;
