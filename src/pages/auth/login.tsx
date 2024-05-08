import SignIn from '@/components/auth/sign-in/SignIn';
const CONTAINER_CSS = 'w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14 p-[50rem]';
const LoginPage = () => {
  return (
    <div className={CONTAINER_CSS}>
      <SignIn />
    </div>
  );
};

export default LoginPage;
