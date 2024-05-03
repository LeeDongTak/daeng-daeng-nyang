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
  const { changeItem, currentIndex } = useSearchLocationType({
    initialValue: 0,
    allTabs: CONTENT_TYPE,
    type: 'CALL_TYPE',
  });
  return (
    <div className="border-b-2 border-[#C5C9CF] ">
      {CONTENT_TYPE.map((content, idx) => (
        <Button
          className={cn(
            'text-3xl tracking-[0.2rem] bg-transparent text-black  hover:text-white py-8 px-10 hover:border-b-2',
            currentIndex === idx && 'border-b-2 bg-primary/90 text-white border-b-primary',
          )}
          onClick={changeItem(idx)}
        >
          {content.tab}
        </Button>
      ))}
    </div>
  );
};

export default SearchLocationType;
