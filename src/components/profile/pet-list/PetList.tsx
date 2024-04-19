import { cn } from '@/lib/utils';
import PageArrowLeft from '../../../../public/icons/page-arrow-left.svg';
import PageArrowRight from '../../../../public/icons/page-arrow-right.svg';
import PetLstItem from './PetLstItem';

const PetList = () => {
  return (
    <div className={cn('flex justify-center items-center w-[100%] gap-[4.8rem] h-auto')}>
      <div className={cn('relative group w-[4rem] h-[3.7rem]')}>
        <span
          className={cn(
            `absolute top-0 left-0 cursor-pointer z-[100]
            group-hover:last:[&_path]:fill-[#fff]
            group-hover:[&>svg]:stroke-[#fff]
            last:[&_path]:transition [&>svg]:duration-300`,
          )}
        >
          <PageArrowLeft wight={'4rem'} height={'3.7rem'} />
        </span>
        <span
          className={cn(
            `absolute z-[99] top-0 left-0 w-[4rem] h-[3.7rem]
            bg-[#191919] rounded-[0.9rem] opacity-0
            group-hover:opacity-100 transition duration-300`,
          )}
        ></span>
      </div>
      <div className={cn('w-[100%] max-w-[84.6rem] h-[25.6rem] overflow-hidden')}>
        <PetLstItem />
        <PetLstItem />
        <PetLstItem />
      </div>
      <div className={cn('relative group w-[4rem] h-[3.7rem]')}>
        <span
          className={cn(
            `absolute top-0 left-0 cursor-pointer z-[100]
            group-hover:last:[&_path]:fill-[#fff]
            group-hover:[&>svg]:stroke-[#fff]
            last:[&_path]:transition [&>svg]:duration-300`,
          )}
        >
          <PageArrowRight wight={'4rem'} height={'3.7rem'} />
        </span>
        <span
          className={cn(
            `absolute z-[99] top-0 left-0 w-[4rem] h-[3.7rem]
            bg-[#191919] rounded-[0.9rem] opacity-0
            group-hover:opacity-100 transition duration-300`,
          )}
        ></span>
      </div>
    </div>
  );
};

export default PetList;
