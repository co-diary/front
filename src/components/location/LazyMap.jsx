import React, { useRef, useState } from 'react';
import { Map, MapMarker, MarkerClusterer, ZoomControl } from 'react-kakao-maps-sdk';
import MyLocationMarker from './MyLocationMarker';
import OverlayInfo from './OverlayInfo';
import OptionButton from './OptionButton';

function LazyMap({ myLocation, locationState, userPost, likedPost, onZoomChanged }) {
  console.log(likedPost);
  const CLUSTER_LEVEL = 9;

  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarkerPosition({ lat: marker[0], lng: marker[1] });
    console.log(selectedMarkerPosition);
    // 원하는 동작 수행
  };

  const mapRef = useRef();

  const onClusterclick = (_target, cluster) => {
    const map = mapRef.current;
    // 현재 지도 레벨에서 1레벨 확대한 레벨
    const level = map.getLevel() - 1;

    // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
    map.setLevel(level, { anchor: cluster.getCenter() });
  };

  return (
    <Map
      center={
        locationState
          ? { lat: locationState[0], lng: locationState[1] }
          : { lat: myLocation.latitude, lng: myLocation.longitude }
      }
      style={{
        position: 'relative',
        width: '100%',
        height: `calc(100vh - 6rem)`,
        overflow: 'hidden',
      }}
      level={3}
      ref={mapRef}
      onZoomChanged={(map) => onZoomChanged(map.getLevel())}
    >
      <MyLocationMarker myLocation={myLocation} />

      {userPost && (
        <MarkerClusterer
          averageCenter={true}
          minLevel={CLUSTER_LEVEL}
          disableClickZoom={true}
          onClusterclick={onClusterclick}
        >
          {userPost.map((post) => (
            <MapMarker
              key={`${post[0]}-${post[1]}`}
              position={{
                lat: post[0],
                lng: post[1],
              }}
              clickable={true}
              onClick={() => handleMarkerClick(post)}
            >
              {selectedMarkerPosition && <OverlayInfo markerPosition={selectedMarkerPosition} />}
            </MapMarker>
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
      <OptionButton></OptionButton>
    </Map>
  );
}

export default LazyMap;
