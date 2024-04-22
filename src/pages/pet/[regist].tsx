import { useRouter } from 'next/router';

const PetRegistPage = () => {
  const { query } = useRouter();

  return <div>{query.regist}</div>;
};

export default PetRegistPage;
