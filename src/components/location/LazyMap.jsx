import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, MarkerClusterer, ZoomControl } from 'react-kakao-maps-sdk';
import MyLocationMarker from './MyLocationMarker';
import OverlayInfo from './OverlayInfo';
import OptionButton from './OptionButton';

function LazyMap({ myLocation, mapCenter, userPost, likedPost, onZoomChanged, handleButtonClick }) {
  console.log(likedPost);
  const CLUSTER_LEVEL = 9;

  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState(null);

  console.log('센터', mapCenter);
  const handleMarkerClick = (marker) => {
    setSelectedMarkerPosition({ lat: marker[0], lng: marker[1] });
    console.log(selectedMarkerPosition);
    // 원하는 동작 수행
  };

  const mapRef = useRef();

  const onClusterclick = (_target, cluster) => {
    const map = mapRef.current;
    const level = map.getLevel() - 1;

    map.setLevel(level, { anchor: cluster.getCenter() });
  };

  const [info, setInfo] = useState();

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <Map
      center={{ lat: mapCenter.lat, lng: mapCenter.lng }}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        marginTop: '4.8rem',
        overflow: 'hidden',
      }}
      level={3}
      ref={mapRef}
      onZoomChanged={(map) => onZoomChanged(map.getLevel())}
      onCenterChanged={(map) =>
        setInfo({
          level: map.getLevel(),
          center: {
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          },
        })
      }
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
      <OptionButton onClick={handleButtonClick} content={'현위치로 이동'}></OptionButton>
    </Map>
  );
}

export default LazyMap;
