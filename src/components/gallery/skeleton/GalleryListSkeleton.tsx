import Skeleton from '@/components/ui/skeleton';

const GalleryListSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-start w-[128rem] h-auto gap-[0.8rem] mx-auto">
      {Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="w-[30.2rem] h-[20rem] rounded-xl" type="card" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" type="input" />
            <Skeleton className="h-4 w-[200px]" type="input" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryListSkeleton;
