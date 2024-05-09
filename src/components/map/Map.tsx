import useGetPetInfoQueryFetch from '@/hooks/server/map/useGetPetInfoQueryFetch';
import MapBody from './map-body/MapBody';
import MapHeader from './map-header/MapHeader';

const Map = () => {
  useGetPetInfoQueryFetch();

  return (
    <div className="w-[128rem] mx-auto py-[6rem]">
      <MapHeader />
      <MapBody />
    </div>
  );
};

export default Map;
