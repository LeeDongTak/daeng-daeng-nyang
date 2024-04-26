import { Button } from '@/components/ui/button';

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
  return (
    <div>
      {CONTENT_TYPE.map((content, idx) => (
        <Button>{content.tab}</Button>
      ))}
    </div>
  );
};

export default MapTab;
