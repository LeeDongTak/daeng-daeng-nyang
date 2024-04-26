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
    <div className="">
      {CONTENT_TYPE.map((content, idx) => (
        <Button>{content.tab}</Button>
      ))}
    </div>
  );
};

export default MapTab;
