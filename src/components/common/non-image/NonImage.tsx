import { cn } from '@/lib/utils';
import ImagePlus from '../../../../public/icons/image-plus.svg';

interface I_PropsType {
  className?: string;
}
const NonImage = ({ className }: I_PropsType) => {
  return (
    <div
      className={cn(
        `flex justify-center items-center rounded-[3rem] bg-[#e3eff7] [&_path]:stroke-[#a09bb3]`,
        className,
      )}
    >
      <ImagePlus width={'3.6rem'} height={'3.6rem'} />
    </div>
  );
};

export default NonImage;
