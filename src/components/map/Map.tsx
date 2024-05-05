import MapBody from './map-body/MapBody';
import MapHeader from './map-header/MapHeader';

const Map = () => {
  return (
    <div className="w-[128rem] mx-auto py-[6rem]">
      <MapHeader />
      <MapBody />
    </div>
  );
};

export default Map;
