import NonImage from '@/components/common/non-image/NonImage';
import { QUERY_KEY } from '@/lib/query-keys/profile-key';
import { cn } from '@/lib/utils';
import { I_userInfoType } from '@/types/profile/profile';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';

const GalleryListItem = ({ thumbnail, galleryId }: { thumbnail: string | null; galleryId: string | number }) => {
  const { push } = useRouter();
  const client = useQueryClient();
  const data = client.getQueryData<I_userInfoType>([QUERY_KEY.PROFILE]) as I_userInfoType;

  const clickRouteHandler = () => {
    push(`/gallery/detail/${galleryId}?userId=${data.id}`);
  };
  return (
    <div
      className={cn(
        'relative flex justify-center items-center w-[25.6rem] h-[16.6rem] rounded-[3rem] bg-[#e3eff7] overflow-hidden cursor-pointer',
      )}
      onClick={clickRouteHandler}
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
