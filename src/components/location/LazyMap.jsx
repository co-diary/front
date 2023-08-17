import React, { useState } from 'react';
import { Map, MapMarker, MarkerClusterer, ZoomControl } from 'react-kakao-maps-sdk';
import MyLocationMarker from './MyLocationMarker';

function LazyMap({ myLocation, locationState, userPost, likedPost, onZoomChanged }) {
  console.log(likedPost);
  const CLUSTER_LEVEL = 9;

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

      {userPost && (
        <MarkerClusterer averageCenter={true} minLevel={CLUSTER_LEVEL}>
          {userPost.map((post) => (
            <MapMarker
              key={`${post[0]}-${post[1]}`}
              position={{
                lat: post[0],
                lng: post[1],
              }}
              clickable={true}
              onClick={() => handleMarkerClick(post)}
            ></MapMarker>
          ))}
        </MarkerClusterer>
      )}
      <ZoomControl anchor='BOTTOMRIGHT' />

      {likedPost &&
        likedPost.map((marker, index) => (
          <MapMarker
            key={index}
            position={{
              lat: `${marker[0]}`,
              lng: `${marker[1]}`,
            }}
            onClick={() => handleMarkerClick()}
          />
        ))}
      <button>버튼1</button>
      <button>버튼2</button>
      <button>버튼3</button>
    </Map>
  );
}

export default LazyMap;
