import React from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';

function LazyMap({ myLocation, userPost, likedPost, onZoomChanged }) {
  console.log(likedPost);

  return (
    <Map
      center={{ lat: myLocation.latitude, lng: myLocation.longitude }}
      style={{ width: '100%', height: `calc(100vh - 6rem)`, overflow: 'hidden' }}
      level={3}
      onZoomChanged={(map) => onZoomChanged(map.getLevel())}
    >
      <ZoomControl position='BOTTOMRIGHT' />

      {userPost &&
        userPost.map((marker, index) => (
          <MapMarker
            key={index}
            position={{
              lat: `${marker[0]}`,
              lng: `${marker[1]}`,
            }}
            draggable={true}
          />
        ))}
      {likedPost &&
        likedPost.map((marker, index) => (
          <MapMarker
            key={index}
            position={{
              lat: `${marker[0]}`,
              lng: `${marker[1]}`,
            }}
            draggable={true}
          />
        ))}
    </Map>
  );
}

export default LazyMap;
