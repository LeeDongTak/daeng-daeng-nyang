import SignUp from '@/components/auth/sign-up/SignUp';

const CONTAINER_CSS = 'w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14 p-[50rem]';
const SignUpPage = () => {
  return (
    <div className={CONTAINER_CSS}>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
