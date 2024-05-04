import { Button } from '@/components/ui/button';
import { SEOUL_LOCATION } from '@/data/map/seoul-area';
import useSeoulLocation from '@/hooks/client/map/search-location/useSeoulLocation';
import { cn } from '@/lib/utils';
const SCROLL_HORIZONTAL_WRAPPER =
  'top-0 -left-[56px] absolute overflow-x-hidden overflow-y-auto origin-top-right w-[60px] h-[450px] -rotate-90 scroll-smooth scrollbar-hide';
const SCROLL_HORIZONTAL_ELEMENT = 'rotate-90 origin-right-top my-11  w-[60px] h-[24px]';
const FOCUS_ITEM = 'bg-primary text-white';

const SeoulLocation = () => {
  const { clickGetSeoulLocation, currentIndex } = useSeoulLocation({ initialValue: null, allTabs: SEOUL_LOCATION });

  return (
    <div className={SCROLL_HORIZONTAL_WRAPPER}>
      {SEOUL_LOCATION.map(({ location, api_query }, idx) => (
        <Button
          name={api_query}
          className={cn(
            'bg-transparent text-primary border border-primary rounded-full font-semibold text-lg  leading-relaxedpx-8 hover:text-white ',
            SCROLL_HORIZONTAL_ELEMENT,
            idx === currentIndex && FOCUS_ITEM,
          )}
          onClick={async () => await clickGetSeoulLocation(idx, api_query)}
        >
          {location}
        </Button>
      ))}
    </div>
  );
};

export default SeoulLocation;
