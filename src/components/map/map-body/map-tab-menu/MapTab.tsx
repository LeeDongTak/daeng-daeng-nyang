import { Button } from '@/components/ui/button';
import useTab from '@/hooks/client/useTab';

const CONTENT_TYPE = [
  {
    tab: '병원&약국',
    api_type: '',
  },
  {
    tab: '산책로',
    api_type: '',
  },
];
const MapTab = () => {
  const { currentItem, changeItem } = useTab({ initialValue: 0, allTabs: CONTENT_TYPE });
  return (
    <div className="border-b-2 border-[#C5C9CF] ">
      {CONTENT_TYPE.map((content, idx) => (
        <Button className="text-3xl tracking-[0.2rem] bg-transparent text-black  hover:text-white py-8 px-10">
          {content.tab}
        </Button>
      ))}
    </div>
  );
};

export default MapTab;
