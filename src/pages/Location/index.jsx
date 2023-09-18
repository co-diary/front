import React, { useState, useEffect, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useLocation, useNavigate } from 'react-router';
import { db } from '../../firebase';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import { authState } from '../../atom/authRecoil';
import useGetLocation from '../../hooks/useGetLocation';
import LoadingIndicator from '../../components/common/LoadingIndicator';

const LazyMap = React.lazy(() => import('../../components/location/LazyMap'));

function Location() {
  const user = useRecoilValue(authState);
  const [userPost, setUserPost] = useState([]);
  const [likedPost, setLikedPost] = useState([]);
  const [zoomLevel, setZoomLevel] = useState();
  const [mapState, setMapState] = useState(null);
  const location = useLocation();
  const locationState = location.state;

  const ZOOM_LEVEL = 4;

  const { myLocation, getLocation } = useGetLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getUserData();
      getLikedData();
    }
  }, [user]);

  const getUserData = async () => {
    const postArr = [];
    const q = query(collection(db, 'post'), where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((value) => {
      // postArr.push(value.data().address.latLng);
      postArr.push(value.data());
    });
    setUserPost(postArr);
  };

  const getLikedData = async () => {
    const postArr = [];
    const q = query(collection(db, 'liked'), where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((value) => {
      // postArr.push(value.data().address.latLng);
      postArr.push(value.data());
    });
    setLikedPost(postArr);
  };

  useEffect(() => {
    if (myLocation) {
      setMapState(
        locationState
          ? {
              center: { lat: locationState[0], lng: locationState[1] },
              isPanto: true,
              level: ZOOM_LEVEL,
            }
          : {
              center: { lat: myLocation.latitude, lng: myLocation.longitude },
              isPanto: true,
              level: ZOOM_LEVEL,
            },
      );
    }
  }, [myLocation, locationState]);

  const handleMoveToMyLocation = async () => {
    await getLocation();
    if (myLocation && mapState !== null) {
      setMapState({
        center: { lat: myLocation.latitude, lng: myLocation.longitude },
        isPanto: true,
        level: ZOOM_LEVEL,
      });
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header title='지도' handlePageBack={goBack} />
      <Suspense fallback={<LoadingIndicator />}>
        {myLocation && mapState !== null ? (
          <LazyMap
            myLocation={myLocation}
            mapCenter={mapState.center}
            locationState={locationState}
            userPost={userPost}
            likedPost={likedPost}
            onZoomChanged={setZoomLevel}
            handleMoveToMyLocation={handleMoveToMyLocation}
          />
        ) : (
          <LoadingIndicator />
        )}
      </Suspense>

      <NavBar />
    </>
  );
}

export default Location;
