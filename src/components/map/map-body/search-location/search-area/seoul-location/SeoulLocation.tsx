import { Button } from '@/components/ui/button';
import { SEOUL_LOCATION } from '@/data/map/seoul-area';
import { cn } from '@/lib/utils';
const SCROLL_HORIZONTAL_WRAPPER =
  'top-0 -left-[56px] absolute overflow-x-hidden overflow-y-auto origin-top-right w-[60px] h-[450px] -rotate-90 scroll-smooth scrollbar-hide';
const SCROLL_HORIZONTAL_ELEMENT = 'rotate-90 origin-right-top my-11  w-[60px] h-[24px]';
const SeoulLocation = () => {
  //   'bg-primary text-white';

  return (
    <div className={SCROLL_HORIZONTAL_WRAPPER}>
      {SEOUL_LOCATION.map(({ location }) => (
        <Button
          className={cn(
            'bg-transparent text-primary border border-primary rounded-full font-semibold text-lg  leading-relaxedpx-8 hover:text-white ',
            SCROLL_HORIZONTAL_ELEMENT,
          )}
        >
          {location}
        </Button>
      ))}
    </div>
  );
};

export default SeoulLocation;
