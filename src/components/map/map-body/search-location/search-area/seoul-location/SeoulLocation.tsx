import { Button } from '@/components/ui/button';
import { SEOUL_LOCATION } from '@/data/map/seoul-area';
import { cn } from '@/lib/utils';

const SeoulLocation = () => {
  //   'bg-primary text-white';
  const scroll_horizontal =
    'top-0 -left-[40px] absolute overflow-x-hidden overflow-y-auto origin-top-right w-[60px] h-[480px] -rotate-90 scroll-smooth ';
  const scroll_horizontal_element = 'rotate-90 origin-right-top my-11  w-[60px] h-[24px]';
  return (
    <div className={cn('  ', scroll_horizontal)}>
      {SEOUL_LOCATION.map(({ location }) => (
        <Button
          className={cn(
            'bg-transparent text-primary border border-primary rounded-full font-semibold text-lg  leading-relaxedpx-8 hover:text-white ',
            scroll_horizontal_element,
          )}
        >
          {location}
        </Button>
      ))}
    </div>
  );
};

export default SeoulLocation;
