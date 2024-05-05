import Title from '@/components/common/Title';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import animalPNG from '../../../../public/image/animal.png';
import personPNG from '../../../../public/image/person.png';

const SideImage = () => {
  return (
    <div
      className={cn(
        'flex justify-between items-end absolute top-0 left-[50%] translate-x-[-50%] w-[100%] max-w-[138rem] h-[80rem] px-[5rem]',
      )}
    >
      <Image src={personPNG} alt="사람 이미지" />
      <div className={cn('flex flex-col justify-between w-[42.9rem] h-[54.5rem]')}>
        <span className={cn('w-[10rem]')}>
          <Title
            level={5}
            className="text-[6.4rem] font-bold h-[3.2rem] text-white tracking-widest leading-[7rem]"
            isOutfit={true}
            text="daeng daeng Nyang"
          />
        </span>
        <p className={cn('flex justify-end')}>
          <Image src={animalPNG} alt="동물 이미지" />
        </p>
      </div>
    </div>
  );
};

export default SideImage;
