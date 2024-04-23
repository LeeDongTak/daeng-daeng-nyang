import { cn } from '@/lib/utils';
import ImagePlus from '../../../../public/icons/image-plus.svg';

interface I_PropsType {
  className?: string;
  iconWidth?: string;
  iconHeight?: string;
}
const NonImage = ({ className, iconWidth = '3.6rem', iconHeight = '3.6rem' }: I_PropsType) => {
  return (
    <div
      className={cn(
        `flex justify-center items-center rounded-[3rem] bg-[#e3eff7] [&_path]:stroke-[#a09bb3]`,
        className,
      )}
    >
      <ImagePlus width={iconWidth} height={iconHeight} />
    </div>
  );
};

export default NonImage;
