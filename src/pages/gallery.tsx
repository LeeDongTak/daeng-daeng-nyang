import Skeleton from '@/components/ui/skeleton';

const gallery = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton type="input" />
      <div className="space-y-2">
        <Skeleton type="calendar" />
        <Skeleton type="map" />
        <Skeleton type="input" />
        <Skeleton type="chat_message" />
        <Skeleton type="banner" />
        <Skeleton type="card" />
        <Skeleton type="avatar" />
      </div>
    </div>
  );
};

export default gallery;
