import RegistPet from '@/components/regist-pet/RegistPet';
import { useModal } from '@/hooks/client/ui/useModal';
import useToast from '@/hooks/client/useToast';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface I_propsType {
  isMouseHover: boolean;
  isMouseHoverClose: boolean;
  clickStateResetHandler: () => void;
}
const MenuBox = ({ isMouseHover, isMouseHoverClose, clickStateResetHandler }: I_propsType) => {
  const { toast } = useToast();
  const { push } = useRouter();
  const { DaengModal } = useModal();
  const [showEffect, setShowEffect] = useState('opacity-0');
  const aa = isMouseHover ? 'opacity-100' : 'opacity-100';
  const USER_MENU_ITEM = {
    myPage: ['마이 페이지', '/profile'],
    addPet: ['반려동물 등록', 'pet'],
    logout: ['로그아웃', 'logout'],
  };

  /**
   * 클릭이밴트 함수
   * @param menuType
   */
  const clickMenuHandler = (menuType: string) => {
    if (menuType === 'logout') {
      logout(logoutCallbackFuc);
      return;
    }
    if (menuType === 'pet') {
      DaengModal.fire(<RegistPet />);
      clickStateResetHandler();
      return;
    }

    push(menuType);
    clickStateResetHandler();
  };

  /**
   * 로그아웃 을 위한 함수 (인자로 콜백함수가 들어간다.)
   * @param message
   * @returns
   */
  const logout = (message: () => void) => {
    signOut();
    return message();
  };

  /**
   * 로그아웃 이후 toast메시지내보내기 위한 콜백함수
   */
  const logoutCallbackFuc = () => {
    clickStateResetHandler();
    push('/');
    toast({
      title: '로그아웃 되었습니다. ',
      variant: 'success',
      position: 'top-center',
      closeTimeOut: 2000,
    });
  };

  useEffect(() => {
    if (isMouseHover) {
      const timer = setTimeout(() => {
        setShowEffect('opacity-100');
        clearTimeout(timer);
      }, 100);
    }
  }, [isMouseHover]);

  useEffect(() => {
    if (!isMouseHoverClose) {
      setShowEffect('opacity-0');
    }
  }, [isMouseHoverClose]);

  return (
    <ul
      className={cn(
        `absolute top-[5rem] left-[50%] translate-x-[-50%] z-301 w-[15rem] h-[auto] bg-white z-[301]
        shadow-[0_0_0.5rem_0_rgba(0,0,0,0.2)] rounded-[1rem] [&>li]:cursor-pointer transition-all duration-300`,
        showEffect,
      )}
    >
      <p
        className={cn(
          'absolute top-[-0.8rem] left-[50%] translate-x-[-50%] w-[2rem] h-[2rem] rounded-[0.5rem] bg-white rotate-[135deg] shadow-[-0.2rem_0.2rem_0.2rem_0_rgba(0,0,0,0.1)]',
        )}
      ></p>
      {Object.values(USER_MENU_ITEM).map((item, index) => (
        <li
          key={Object.keys(USER_MENU_ITEM)[index]}
          className={cn('flex justify-center py-[10%] text-[1.4rem] font-[400] border-solid border-b-[1px]')}
          onClick={() => {
            clickMenuHandler(item[1]);
          }}
        >
          {item[0]}
        </li>
      ))}
    </ul>
  );
};

export default MenuBox;
