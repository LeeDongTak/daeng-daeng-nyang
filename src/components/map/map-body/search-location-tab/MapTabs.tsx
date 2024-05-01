import { Button } from '@/components/ui/button';
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
] as const;
export type T_Search = typeof CONTENT_TYPE;
const SearchLocationTab = () => {
  return (
    <div className="border-b-2 border-[#C5C9CF] ">
      {CONTENT_TYPE.map((content, idx) => (
        <Button
          className={cn(
            'text-3xl tracking-[0.2rem] bg-transparent text-black  hover:text-white py-8 px-10 hover:border-b-2',
          )}
        >
          {content.tab}
        </Button>
      ))}
    </div>
  );
};

export default SearchLocationTab;
