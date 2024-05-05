import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';

const JumbotronTitle = () => {
  const { isMobileQuery: isMobileMax850 } = useMobile('(max-width:850px)');

  return (
    <div
      className={cn(
        'flex justify-center items-center gap-[15rem] absolute top-0 left-[50%] translate-x-[-50%] w-[100%] nax-w-[138rem] h-[65vh] px-[5rem]',
      )}
    >
      {!isMobileMax850 && (
        <div className={cn('w-[20rem] h-[23rem]')}>
          <Title
            level={5}
            className="text-[6.4rem] font-bold h-[3.2rem] text-white tracking-widest leading-[7rem]"
            isOutfit={true}
            text="daeng daeng Nyang"
          />
        </div>
      )}
      <div className={cn('flex flex-col gap-[2.4rem]')}>
        <Button type="button" variant="jumbotron" size="jumbotron" children="지도 보러 가기" />
        <Button type="button" variant="jumbotron" size="jumbotron" children="일정 등록 하기" />
        <Button type="button" variant="jumbotron" size="jumbotron" children="겔러리 보러 가기" />
      </div>
    </div>
  );
};

export default JumbotronTitle;
