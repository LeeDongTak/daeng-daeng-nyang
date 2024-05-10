import { Button } from '@/components/ui/button';
import useSearchLocationType from '@/hooks/client/map/search-location/useSearchLocationType';
import { cn } from '@/lib/utils';

const CONTENT_TYPE = [
  {
    tab: '병원&약국',
    CALL_TYPE: 'hospital',
  },
  {
    tab: '산책로',
    CALL_TYPE: 'walk',
  },
];
const SearchLocationType = () => {
  const { changeAPI, currentIndex } = useSearchLocationType({
    initialValue: 0,
    allTabs: CONTENT_TYPE,
    type: 'CALL_TYPE',
  });

  return (
    <div className="border-b border-[#C5C9CF] ">
      {CONTENT_TYPE.map((content, idx) => (
        <Button
          key={content.CALL_TYPE}
          className={cn(
            'text-3xl py-8 px-10 tracking-[0.2rem] bg-transparent text-black    border-b-2 hover:text-white hover:border-b-primary',
            currentIndex === idx && 'border-b-2 bg-primary/90 text-white border-b-primary',
          )}
          onClick={() => changeAPI(idx)}
        >
          {content.tab}
        </Button>
      ))}
    </div>
  );
};

export default SearchLocationType;
