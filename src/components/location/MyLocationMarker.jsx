import React from 'react';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';

function MyLocationMarker({ lat, lng }) {
  return (
    <CustomOverlayMap position={{ lat: { lat }, lng: { lng } }}>
      <div style={{ padding: '5px', color: '#000' }}>현위치</div>
    </CustomOverlayMap>
  );
}

export default MyLocationMarker;
