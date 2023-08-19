import React from 'react';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import * as S from './style';

function OverlayInfo({ markerPosition, index }) {
  console.log('markerPosition', markerPosition);

  return (
    <CustomOverlayMap position={{ lat: markerPosition[0], lng: markerPosition[1] }}>
      <S.Container>잉?</S.Container>
      <div>뭔가 이게 맞나싶고 </div>
    </CustomOverlayMap>
  );
}

export default OverlayInfo;
