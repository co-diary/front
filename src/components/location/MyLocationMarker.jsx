import React from 'react';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';

function MyLocationMarker({ myLocation }) {
  return (
    <CustomOverlayMap
      position={{ lat: myLocation.latitude, lng: myLocation.longitude }}
      yAnchor={1}
    >
      <div
        style={{
          minWith: '20px',
          position: 'relative',
          top: '15px',
          right: '5px',
          padding: '0.5rem',
          backgroundColor: '#F7DA76',
          color: '#000',
          borderRadius: '1rem',
          fontFamily: 'LINESeedKR-Rg',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
          fontSize: '1.4rem',
        }}
      >
        <span>현위치</span>
      </div>
    </CustomOverlayMap>
  );
}

export default MyLocationMarker;
