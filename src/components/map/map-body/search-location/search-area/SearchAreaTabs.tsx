import SeoulLocation from './seoul-location/SeoulLocation';
const SCROLL_HORIZONTAL_CONTAINER = 'relative h-[40px] mb-6';
const SearchAreaTabs = () => {
  return (
    <div className={SCROLL_HORIZONTAL_CONTAINER}>
      <SeoulLocation />
    </div>
  );
};

export default SearchAreaTabs;
