import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import Avatar from '../../../../../public/icons/avatar.svg';
import BellRing from '../../../../../public/icons/bell-ring.svg';
import Search from '../../../../../public/icons/search.svg';

const MenuBox = () => {
  const { isMobileQuery: isMobileMax1024 } = useMobile('(max-width:1024px)');
  const { push } = useRouter();
  const MENU_ITEM = {
    map: ['병원&약국 찾기', '/map'],
    calendar: ['일정 등록하기', '/calendar'],
    gallery: ['겔러리', '/gallery'],
  };

  const clickRouteHandler = (path: string) => {
    push(path);
  };

  return (
    <div className={cn('flex items-center w-auto h-[100%] gap-[3.2rem]')}>
      {!isMobileMax1024 && (
        <>
          <div
            className={cn(
              'flex items-center w-auto h-[100%] text-[1.6rem] font-[600] gap-[3.2rem] [&>span]:cursor-pointer',
            )}
          >
            {Object.values(MENU_ITEM).map((item, index) => {
              return (
                <span
                  key={Object.keys(MENU_ITEM)[index]}
                  onClick={() => {
                    clickRouteHandler(item[1]);
                  }}
                >
                  {item[0]}
                </span>
              );
            })}
          </div>
          <span className={cn('w-1 h-[2.4rem] bg-[#aaa]')}></span>
        </>
      )}
      <div className={cn('flex items-center w-auto h-[100%] gap-[2.4rem] [&>span]:cursor-pointer')}>
        <span>
          <Search width={'2.4rem'} height={'2.4rem'} />
        </span>
        <span>
          <BellRing width={'2.4rem'} height={'2.4rem'} />
        </span>
        <span>
          <Avatar width={'3.2rem'} height={'3.2rem'} />
        </span>
      </div>
    </div>
  );
};

export default MenuBox;
