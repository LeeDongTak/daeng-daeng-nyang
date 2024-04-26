import Title from '@/components/common/Title';
import { cn } from '@/lib/utils';

const ProfileTitle = () => {
  return (
    <div className={cn('w-[100%] h-auto max-w-[84.6rem] mx-auto mb-[4.8rem]')}>
      <Title level={5} className="m-0 p-0 text-[6.4rem] font-[700]" text="My Page" isOutfit={true} />
      <Title level={1} className="h-[1.8rem] m-0 p-0 text-[1.8rem] font-[700]" text="나의 반려동물을 자랑해 보세요" />
    </div>
  );
};

export default ProfileTitle;
