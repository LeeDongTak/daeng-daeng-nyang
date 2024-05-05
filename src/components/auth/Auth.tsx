import { useState } from 'react';
import SignUp from './sign-up/SignUp';

const Auth = () => {
  const [mode, setMode] = useState(true);
  return <div className="w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14">{<SignUp />}</div>;
};

export default Auth;
