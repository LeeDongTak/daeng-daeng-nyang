import { useState } from 'react';
import SignIn from './sign-in/SignIn';

const Auth = () => {
  const [mode, setMode] = useState(true);
  return <div className="w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14">{<SignIn />}</div>;
};

export default Auth;
