import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';

const AuthButton = () => {
  const { push } = useRouter();
  const AUTH_MENU_ITEM = {
    login: ['로그인', '/auth/login'],
    signUp: ['회원가입', '/auth/sign-up'],
  };

  const clickRouteHandler = (pathName: string) => {
    push(pathName);
  };

  return (
    <div
      className={cn('flex items-center w-auto h-[100%] text-[1.6rem] font-[600] gap-[3.2rem] [&>span]:cursor-pointer')}
    >
      {Object.values(AUTH_MENU_ITEM).map((item, index) => (
        <span
          key={Object.keys(AUTH_MENU_ITEM)[index]}
          onClick={() => {
            clickRouteHandler(item[1]);
          }}
        >
          {item[0]}
        </span>
      ))}
    </div>
  );
};

export default AuthButton;
