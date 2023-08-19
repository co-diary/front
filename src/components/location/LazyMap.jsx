import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, MarkerClusterer, ZoomControl } from 'react-kakao-maps-sdk';
import MyLocationMarker from './MyLocationMarker';
import OverlayInfo from './OverlayInfo';
import OptionButton from './OptionButton';

function LazyMap({ myLocation, mapCenter, userPost, likedPost, onZoomChanged, handleButtonClick }) {
  console.log(likedPost);
  const CLUSTER_LEVEL = 9;

  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [postList, setPostList] = useState();

  useEffect(() => {
    setPostList(
      userPost.map((post) => ({
        id: (post.address.latLng[1] - post.address.latLng[0]).toString(),
        latLng: post.address.latLng,
      })),
    );
  }, []);

  useEffect(() => {
    console.log('활성화', selectedMarkerId);
    console.log('포스트리스트', postList);
  }, [selectedMarkerId, postList]);

  const handleMarkerClick = (markerId) => {
    setSelectedMarkerId((prevMarkerId) => {
      if (prevMarkerId === markerId) {
        setIsOpen(false);
        return null;
      } else {
        setIsOpen(true);
        return markerId;
      }
    });
  };
  const mapRef = useRef();

  const onClusterclick = (_target, cluster) => {
    const map = mapRef.current;
    const level = map.getLevel() - 1;

    map.setLevel(level, { anchor: cluster.getCenter() });
  };

  return (
    <>
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
      >
        <MyLocationMarker myLocation={myLocation} />

        {postList && (
          <MarkerClusterer
            averageCenter={true}
            minLevel={CLUSTER_LEVEL}
            disableClickZoom={true}
            onClusterclick={onClusterclick}
          >
            {postList.map((marker) => (
              <MapMarker
                key={marker.id}
                position={{
                  lat: marker.latLng[0],
                  lng: marker.latLng[1],
                }}
                clickable={true}
                onClick={() => handleMarkerClick(marker.id)}
              >
                {isOpen && selectedMarkerId === marker.id && (
                  <OverlayInfo markerPosition={marker.latLng} />
                )}
              </MapMarker>
            ))}
          </MarkerClusterer>
        )}
        <ZoomControl anchor='BOTTOMRIGHT' />

        {/* {likedPost &&
          likedPost.map((marker, index) => (
            <MapMarker
              key={index}
              position={{
                lat: `${marker[0]}`,
                lng: `${marker[1]}`,
              }}
              onClick={() => handleMarkerClick(marker)}
            />
          ))} */}
        <OptionButton onClick={handleButtonClick} content={'현위치로 이동'}></OptionButton>
      </Map>
    </>
  );
}

export default LazyMap;
