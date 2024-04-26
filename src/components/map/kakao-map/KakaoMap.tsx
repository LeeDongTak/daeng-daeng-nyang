import Script from 'next/script';
import { Fragment } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
const KakaoMap = () => {
  return (
    <Fragment>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 33.5563, lng: 126.79581 }} level={4} style={{ width: '800px', height: '600px' }}>
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>
    </Fragment>
  );
};

export default KakaoMap;
