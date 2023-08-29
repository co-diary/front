import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, MarkerClusterer, ZoomControl } from 'react-kakao-maps-sdk';
import OverlayInfo from './OverlayInfo';
import OptionButton from './OptionButton';
import MyLocationMarker from './MyLocationMarker';

function LazyMap({ myLocation, mapCenter, userPost, likedPost, onZoomChanged, handleButtonClick }) {
  const CLUSTER_LEVEL = 9;

  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [postList, setPostList] = useState();
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);

  useEffect(() => {
    setPostList(
      userPost.map((post) => ({
        id: (post.address.latLng[1] - post.address.latLng[0]).toString(),
        latLng: post.address.latLng,
        menu: post.menu,
        shop: post.shop,
        photo: post.photo,
        tag: post.tag,
      })),
    );
  }, []);

  const handleMarkerClick = (markerId, e) => {
    e.stopPropagation();
    if (selectedMarkerId === markerId) {
      setIsOpen(false);
      setSelectedMarkerInfo(null);
      setSelectedMarkerId(null);
    } else {
      setIsOpen(true);
      setSelectedMarkerInfo(markerId);
      setSelectedMarkerId(markerId);
    }
  };

  const mapRef = useRef();

  const handleClusterClick = (_target, cluster) => {
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
        draggable={true}
        onZoomChanged={(map) => onZoomChanged(map.getLevel())}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
            setSelectedMarkerInfo(null);
            setSelectedMarkerId(null);
          }
        }}
      >
        <MyLocationMarker myLocation={myLocation} />

        {postList && (
          <MarkerClusterer
            averageCenter={true}
            minLevel={CLUSTER_LEVEL}
            disableClickZoom={true}
            onClusterclick={handleClusterClick}
          >
            {postList.map((marker) => (
              <MapMarker
                key={marker.id}
                position={{
                  lat: marker.latLng[0],
                  lng: marker.latLng[1],
                }}
                clickable={true}
                onClick={(e) => handleMarkerClick(marker.id, e)}
              />
            ))}
            {isOpen && selectedMarkerInfo && (
              <OverlayInfo postInfo={postList.find((marker) => marker.id === selectedMarkerInfo)} />
            )}
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
