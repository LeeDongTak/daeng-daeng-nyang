import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import { CalendarDays, Hospital, Images } from 'lucide-react';
import { useRouter } from 'next/router';

const MobileNav = () => {
  const { isMobileQuery: isMobileMax500 } = useMobile('(max-width:500px)');
  const px500 = isMobileMax500 ? 'bottom-[-0.5%]' : 'bottom-[1%]';
  const { push } = useRouter();
  const MENU_ITEM = {
    map: ['병원&약국 찾기', '/map', <Hospital color="#616161" />],
    calendar: ['일정 등록하기', '/calendar', <CalendarDays color="#616161" />],
    gallery: ['갤러리', '/gallery', <Images color="#616161" />],
  };
  const clickRouteHandler = (path: string) => {
    push(path);
  };
  return (
    <div
      className={cn(
        'fixed  left-[50%] translate-x-[-50%] w-full max-w-[50rem] h-[9rem] bg-white rounded-[1rem] shadow-[0_0_1rem_0_rgba(0,0,0,0.2)]',
        px500,
      )}
    >
      <div
        className={cn(
          'flex items-center justify-evenly w-auto h-[100%] text-[1.6rem] font-[600] gap-[3.2rem] [&>span]:cursor-pointer',
        )}
      >
        {Object.values(MENU_ITEM).map((item, index) => {
          return (
            <p
              className={cn('h-full flex flex-col gap-1 justify-center items-center flex-1 cursor-pointer')}
              key={Object.keys(MENU_ITEM)[index]}
              onClick={() => {
                clickRouteHandler(item[1] as string);
              }}
            >
              {item[2]}
              {item[0]}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
