import { MapMarkerProps } from 'react-kakao-maps-sdk';

export interface I_CustomMarkerProps extends MapMarkerProps {
  id: string;
  position: { lng: number; lat: number }; //  marker를 배열 돌릴 때 key값을 넣으려면 type custom 해야함
  place: string;
  address: string;
  phone: string;
}
