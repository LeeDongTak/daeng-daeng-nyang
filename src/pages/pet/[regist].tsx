import RegistPet from '@/components/regist-pet/RegistPet';
const CONTAINER_CSS = 'w-full h-[calc(100vh-36rem)] grid place-content-center items-center gap-14 py-[30rem]';
const PetRegistPage = () => {
  return (
    <div className={CONTAINER_CSS}>
      <RegistPet />
    </div>
  );
};

export default PetRegistPage;
