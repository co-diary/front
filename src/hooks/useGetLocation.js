import { useState, useEffect } from 'react';

// 현재 위치 정보를 처리하는 컴포넌트 (데이터 다루는 컴포넌트)
function useGetLocation() {
  const [myLocation, setMyLocation] = useState(null);

  console.log(navigator.geolocation.getCurrentPostiion);

  const successHandler = (response) => {
    console.log(response); // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
    const { latitude, longitude } = response.coords;

    setMyLocation({ latitude, longitude });
  };

  const errorHandler = (error) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  console.log(`현재 위치는 ${myLocation}입니다`);

  return myLocation;
}

export default useGetLocation;
