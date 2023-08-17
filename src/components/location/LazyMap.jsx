import React from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import MyLocationMarker from './MyLocationMarker';
// import MapMarkerYellow from '../../assets/Icon-map-marker-yellow.png';

function LazyMap({ myLocation, locationState, userPost, likedPost, onZoomChanged }) {
  console.log(likedPost);

  return (
    <Map
      center={
        locationState
          ? { lat: locationState[0], lng: locationState[1] }
          : { lat: myLocation.latitude, lng: myLocation.longitude }
      }
      style={{ width: '100%', height: `calc(100vh - 6rem)`, overflow: 'hidden' }}
      level={3}
      onZoomChanged={(map) => onZoomChanged(map.getLevel())}
    >
      <MyLocationMarker myLocation={myLocation} />

      <ZoomControl anchor='BOTTOMRIGHT' />

      {userPost &&
        userPost.map((marker, index) => (
          <MapMarker
            key={index}
            position={{
              lat: `${marker[0]}`,
              lng: `${marker[1]}`,
            }}
            draggable={true}
            clickable={true}
          >
            <div style={{ minWidth: '50px', border: '1px solid red' }}>
              <img
                alt='close'
                width='14'
                height='13'
                src='https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif'
                style={{
                  position: 'absolute',
                  right: '5px',
                  top: '5px',
                  cursor: 'pointer',
                }}
              />
            </div>
          </MapMarker>
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
