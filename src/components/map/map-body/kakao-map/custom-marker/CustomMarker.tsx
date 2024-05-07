import { PropsWithChildren } from 'react';
import { MapMarker, MapMarkerProps } from 'react-kakao-maps-sdk';
interface I_MarkerProps extends MapMarkerProps {}
interface I_MarkerProps extends PropsWithChildren {}

const MAREKR_IMAGE_SRC = '/icons/location.svg';
const MARKER_PROPS = {
  src: MAREKR_IMAGE_SRC,
  size: { width: 42, height: 42 },
  options: {
    alt: 'marker',
    offset: { x: 21, y: 64 },
  },
};
const CustomMarker = (props: I_MarkerProps) => {
  const { children } = props;
  return (
    <MapMarker image={MARKER_PROPS} {...props}>
      {children}
    </MapMarker>
  );
};

export default CustomMarker;
