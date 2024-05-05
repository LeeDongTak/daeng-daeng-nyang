import { useState } from 'react';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';

const CONTAINER_CSS = 'w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14';
const Auth = () => {
  const [isChangeCom, setIsChangeCom] = useState<boolean>(false);
  const clickChangeCom = (isChange: boolean) => {
    setIsChangeCom(isChange);
  };
  return (
    <div className={CONTAINER_CSS}>
      {isChangeCom ? <SignUp clickChangeCom={clickChangeCom} /> : <SignIn clickChangeCom={clickChangeCom} />}
    </div>
  );
};

export default Auth;
