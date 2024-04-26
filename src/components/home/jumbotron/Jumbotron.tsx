import Title from '@/components/common/Title';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import animalPNG from '../../../../public/image/animal.png';
import JumbotronPNG from '../../../../public/image/jumbotron.png';
import personPNG from '../../../../public/image/person.png';
const Jumbotron = () => {
  return (
    <div className={cn('relative w-full h-[80rem] pt-[10rem]')}>
      <div className={cn('flex justify-between items-start w-full')}>
        <p className={cn('w-[38.4rem] h-[62rem] bg-[#F79B8C] rounded-full rounded-s-none')}></p>
        <p className={cn('w-[38.4rem] h-[62rem] bg-[#35A37E] rounded-full rounded-e-none')}></p>
      </div>
      <div
        className={cn(
          'absolute top-[10rem] left-[50%] translate-x-[-50%] w-[128rem] h-[62rem] rounded-[15rem] overflow-hidden',
        )}
      >
        <Image src={JumbotronPNG} alt="점보트론 이미지" />
      </div>
      <div
        className={cn(
          'flex justify-between items-end absolute top-0 left-[50%] translate-x-[-50%] w-[128rem] h-[80rem]',
        )}
      >
        <Image src={personPNG} alt="사람 이미지" />
        <div className={cn('flex flex-col justify-between w-[42.9rem] h-[54.5rem]')}>
          <span className={cn('w-[10rem] bg-black')}>
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
    </div>
  );
};

export default Jumbotron;
