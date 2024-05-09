import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';

const JumbotronTitle = () => {
  const { push } = useRouter();
  const { isMobileQuery: isMobileMax1024 } = useMobile('(max-width:1024px)');
  const { isMobileQuery: isMobileMax920 } = useMobile('(max-width:920px)');
  const { isMobileQuery: isMobileMax740 } = useMobile('(max-width:740px)');
  const { isMobileQuery: isMobileMax600 } = useMobile('(max-width:600px)');
  const { isMobileQuery: isMobileMax420 } = useMobile('(max-width:420px)');
  const { isMobileQuery: isMobileMax640H } = useMobile('(max-height:640px)');
  const px1024 = isMobileMax1024 && 'w-[40%]';
  const px920 = isMobileMax920 && 'w-[55%]';
  const px740 = isMobileMax740 && '[&>button]:text-[2rem] w-[60%] h-[40%]';
  const px600 = isMobileMax600 && '[&>button]:text-[1.6rem]';
  const px420 = isMobileMax420 && '[&>button]:text-[1.2rem]';
  const px640H = isMobileMax640H && 'h-[50%]';

  const clickRouteHandler = (route: string) => {
    push(route);
  };
  return (
    <div
      className={cn(
        'flex justify-center items-center gap-[15rem] absolute top-0 left-[50%] translate-x-[-50%] w-[100%] nax-w-[138rem] h-[100%] px-[5rem]',
      )}
    >
      {!isMobileMax920 && (
        <div className={cn('w-[20rem] h-[23rem]')}>
          <Title
            level={5}
            className="text-[8.4rem] font-bold h-[3.2rem] text-white tracking-widest leading-[7rem]"
            isOutfit={true}
            text="daeng daeng Nyang"
          />
        </div>
      )}
      <div
        className={cn(
          'flex justify-center items-center flex-wrap gap-[2rem] w-[50%] h-[40%] [&>button]:text-[2.4rem]',
          px1024,
          px920,
          px740,
          px600,
          px420,
          px640H,
        )}
      >
        <Button
          type="button"
          variant="jumbotron"
          size="jumbotron"
          children="지도 보러 가기"
          onClick={() => {
            clickRouteHandler('/map');
          }}
        />
        <Button
          type="button"
          variant="jumbotron"
          size="jumbotron"
          children="일정 등록 하기"
          onClick={() => {
            clickRouteHandler('/schedule');
          }}
        />
        <Button
          type="button"
          variant="jumbotron"
          size="jumbotron100"
          children="겔러리 보러 가기"
          onClick={() => {
            clickRouteHandler('/gallery');
          }}
        />
      </div>
    </div>
  );
};

export default JumbotronTitle;
