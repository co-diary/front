import React, { useState, useEffect, useRef } from 'react';
import { Map, MapMarker, MarkerClusterer, ZoomControl } from 'react-kakao-maps-sdk';
import OverlayInfo from './OverlayInfo';
import OptionButton from './Options/OptionButton';
import MyLocationMarker from './MyLocation/MyLocationMarker';
import OptionContainer from './Options';
import MenuButton from './MenuButton';

function LazyMap({
  myLocation,
  mapCenter,
  userPost,
  likedPost,
  onZoomChanged,
  handleMoveToMyLocation,
}) {
  const CLUSTER_LEVEL = 9;

  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [postList, setPostList] = useState();
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);
  const [showAllStores, setShowAllStores] = useState(true); //
  const [showLikedStores, setShowLikedStores] = useState(false);
  const [optionTrigger, setOptionTrigger] = useState(false);
  const [menuButtonMsg, setMenuButtonMsg] = useState('🍔 옵션 보기');
  const [isClusterVisible, setClusterVisible] = useState(true);

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

  const handleMarkerClick = (markerId) => {
    console.log('마커 클릭');
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
    if (!isClusterVisible) {
      return; // 클러스터가 보이지 않을 때에는 함수 종료
    }
    const map = mapRef.current;
    const level = map.getLevel() - 1;

    map.setLevel(level, { anchor: cluster.getCenter() });
  };

  const handleShowLikedStores = () => {
    setShowAllStores(false);
    setShowLikedStores(true);

    setPostList(
      likedPost.map((post) => ({
        id: (post.address.latLng[1] - post.address.latLng[0]).toString(),
        latLng: post.address.latLng,
        menu: post.menu,
        shop: post.shop,
        photo: post.photo,
        tag: post.tag,
      })),
    );
  };

  const handleShowAllStores = () => {
    setShowAllStores(true);
    setShowLikedStores(false);

    setPostList(
      userPost.map((post) => ({
        id: (post.address.latLng[1] - post.address.latLng[0]).toString(),
        latLng: post.address.latLng,
        menu: post.menu,
        shop: post.shop,
        location: post.location,
        photo: post.photo,
        tag: post.tag,
      })),
    );
  };

  const handleMenuButton = () => {
    setOptionTrigger((prev) => !prev);
    optionTrigger ? setMenuButtonMsg('👆 옵션 보기') : setMenuButtonMsg('👇 옵션 닫기');
  };

  return (
    <main style={{ position: 'relative' }}>
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
            disableClickZoom={!isClusterVisible}
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
                onClick={() => handleMarkerClick(marker.id)}
              />
            ))}
            {isOpen && selectedMarkerInfo && (
              <OverlayInfo postInfo={postList.find((marker) => marker.id === selectedMarkerInfo)} />
            )}
          </MarkerClusterer>
        )}
        <ZoomControl anchor='BOTTOMRIGHT' />
      </Map>
      <OptionContainer>
        <MenuButton
          onClick={handleMenuButton}
          content={menuButtonMsg}
          className={optionTrigger ? 'slide-in' : ''}
        ></MenuButton>
        {optionTrigger && (
          <>
            <OptionButton
              onClick={handleShowAllStores}
              content={'📝 기록한 모든 매장 보기'}
              active={showAllStores}
            ></OptionButton>
            <OptionButton
              onClick={handleShowLikedStores}
              content={'❤️ 좋아요 매장만 보기'}
              active={showLikedStores}
            ></OptionButton>
          </>
        )}
        <MenuButton onClick={handleMoveToMyLocation} content={'📍현위치로 이동'}></MenuButton>
      </OptionContainer>
    </main>
  );
}

export default LazyMap;
