import React from 'react';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';

function OverlayInfo({ markerPosition }) {
  return <CustomOverlayMap position={markerPosition}></CustomOverlayMap>;
}

export default OverlayInfo;
