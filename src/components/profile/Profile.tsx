import { cn } from '@/lib/utils';
import PetList from './pet-list/PetList';
import ProfileTitle from './profile-title/ProfileTitle';

const Profile = () => {
  return (
    <div className={cn('w-[100%] h-auto')}>
      <div className={cn('flex flex-col items-center justify-start w-[100%] max-w-[128rem] h-auto py-[8rem] mx-auto')}>
        <ProfileTitle />
        <PetList />
      </div>
    </div>
  );
};

export default Profile;
