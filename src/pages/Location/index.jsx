import React, { useState, useEffect, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useLocation } from 'react-router';
// import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import { db } from '../../firebase';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import { authState } from '../../atom/authRecoil';
import useGetLocation from '../../hooks/useGetLocation';

const LazyMap = React.lazy(() => import('../../components/location/LazyMap'));

function Location() {
  const user = useRecoilValue(authState);
  const [userPost, setUserPost] = useState([]);
  const [likedPost, setLikedPost] = useState([]);
  const [zoomLevel, setZoomLevel] = useState();
  const location = useLocation();
  const locationState = location.state;

  console.log(locationState, zoomLevel);

  const myLocation = useGetLocation();

  // const [myLocation, setMyLocation] = useState(null);

  // const successHandler = (response) => {
  //   console.log(response); // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
  //   const { latitude, longitude } = response.coords;

  //   setMyLocation({ latitude, longitude });
  // };

  // const errorHandler = (error) => {
  //   console.log(error);
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  // }, []);

  useEffect(() => {
    if (user) {
      getUserData();
      getLikedData();
    }
  }, [user]);

  const getUserData = async () => {
    const postArr = [];
    // q는 post 컬렉션 하위 문서에서 uid가 현재 로그인한 유저의 uid와 같은 거 찾는 쿼리
    const q = query(collection(db, 'post'), where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((value) => {
      postArr.push(value.data().address.latLng);
    });
    setUserPost(postArr);
  };

  const getLikedData = async () => {
    const postArr = [];
    const q = query(collection(db, 'liked'), where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((value) => {
      postArr.push(value.data().address.latLng);
    });
    setLikedPost(postArr);
  };

  return (
    <>
      <Header title='지도' />
      <Suspense fallback={<div>Loading Map...</div>}>
        {myLocation ? (
          <LazyMap
            myLocation={myLocation}
            userPost={userPost}
            likedPost={likedPost}
            onZoomChanged={setZoomLevel}
          />
        ) : (
          <div>Loading my location...</div>
        )}
      </Suspense>

      <NavBar />
    </>
  );
}

export default Location;
