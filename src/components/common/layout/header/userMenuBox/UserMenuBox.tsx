import { cn } from '@/lib/utils';
import { useState } from 'react';
import Avatar from '../../../../../../public/icons/avatar.svg';
import MenuBox from './MenuBox';

const UserMenuBox = () => {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [isMouseHoverClose, setIsMouseHoverClose] = useState(false);

  const onMouseHandler = () => {
    if (isMouseHover === false) {
      setIsMouseHover(true);
      setIsMouseHoverClose(true);
    }
    if (isMouseHover === true) {
      setIsMouseHoverClose(false);
      const timer = setTimeout(() => {
        setIsMouseHover(false);
        clearTimeout(timer);
      }, 300);
    }
  };

  const clickStateResetHandler = () => {
    setIsMouseHover(false);
    setIsMouseHoverClose(false);
  };

  return (
    <>
      {isMouseHover && (
        <div className={cn('fixed top-0 left-0 w-full h-[100vh] z-[300] cursor-pointer')} onClick={onMouseHandler} />
      )}
      <div className={cn('relative [&>span]:cursor-pointer')}>
        <span onClick={onMouseHandler}>
          <Avatar width={'3.2rem'} height={'3.2rem'} />
        </span>
        {isMouseHover && (
          <MenuBox
            isMouseHover={isMouseHover}
            isMouseHoverClose={isMouseHoverClose}
            clickStateResetHandler={clickStateResetHandler}
          />
        )}
      </div>
    </>
  );
};

export default UserMenuBox;
