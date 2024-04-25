import Title from '@/components/common/Title';
import useModalCloseHandler from '@/hooks/client/useModalCloseHandler';
import { cn } from '@/lib/utils';
import X from '../../../../public/icons/x.svg';

const PetModalTitle = ({ modalId }: { modalId?: string }) => {
  const { clickModalCloseHandler } = useModalCloseHandler();

  return (
    <div
      className={cn(
        'flex justify-between items-center w-[100%] pb-[1.6rem] border-solid border-b-[1px] border-[#C5C9CF]',
      )}
    >
      <Title level={5} className="text-[2.4rem] h-auto m-0 font-[600]" text="반려동물 정보" />
      <span className={cn('cursor-pointer group ')} onClick={() => clickModalCloseHandler(modalId)}>
        <span
          className={cn(
            'cursor-pointer group-hover:[&_path]:stroke-[#ccc] group-hover:[&_path]:transition group-hover:[&_path]:duration-200',
          )}
        >
          <X width={'3.2rem'} height={'3.2rem'} />
        </span>
      </span>
    </div>
  );
};

export default PetModalTitle;
