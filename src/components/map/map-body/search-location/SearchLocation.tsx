import SearchAreaTabs from './search-area/SearchAreaTabs';
import SearchForm from './search-form/SearchForm';
import SearchLocationType from './search-location-type/SearchLocationType';

const SearchLocation = () => {
  return (
    <div>
      <SearchLocationType />
      <SearchForm />
      <SearchAreaTabs />
    </div>
  );
};

export default SearchLocation;
