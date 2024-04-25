import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Fragment, HTMLAttributes } from 'react';
import X from '../../../../public/icons/x.svg';
interface I_PreviewImageProps extends HTMLAttributes<HTMLDivElement> {
  base64: string | null;
  remove: () => void;
  imgClassName?: string;
}
const PreviewImage = ({ base64, remove, imgClassName }: I_PreviewImageProps) => {
  return (
    <Fragment>
      {base64 && (
        <div className="relative w-64 h-64">
          <X
            width="2rem"
            height="2rem"
            onClick={remove}
            className="absolute cursor-pointer -translate-x-1/2 left-1/2 -translate-y-5 hover:bg-yellow-100 border-yellow-100 border-2"
          />
          <Image
            alt="preview-image"
            src={base64}
            width={200}
            height={200}
            objectFit="cover"
            className={cn('w-64 h-64 rounded-full', imgClassName)}
          />
        </div>
      )}
    </Fragment>
  );
};

export default PreviewImage;
