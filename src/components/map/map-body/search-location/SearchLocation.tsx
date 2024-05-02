import SearchArea from './search-area/SearchArea';
import SearchForm from './search-form/SearchForm';
import SearchLocationType from './search-location-type/SearchLocationType';

const SearchLocation = () => {
  return (
    <div>
      <SearchLocationType />
      <SearchForm />
      <SearchArea />
    </div>
  );
};

export default SearchLocation;
