import useFetchProfileQuery from '@/hooks/server/profile/useFetchProfileQuery';
import { cn } from '@/lib/utils';
import MyGallery from './my-gallery/MyGallery';
import PetList from './pet-list/PetList';
import ProfileTitle from './profile-title/ProfileTitle';
import Schedule from './schedule/Schedule';

const Profile = () => {
  const { data } = useFetchProfileQuery();
  console.log(data?.posts);

  if (!data) return;
  return (
    <div className={cn('w-[100%] h-auto')}>
      <div
        className={cn(
          'flex flex-col gap-[6.4rem] items-center justify-start w-[100%] max-w-[128rem] h-auto py-[8rem] mx-auto',
        )}
      >
        <ProfileTitle />
        <PetList pets={data.pets} />
        <Schedule schedules={data.schedule} />
        <MyGallery posts={data.posts} />
      </div>
    </div>
  );
};

export default Profile;
