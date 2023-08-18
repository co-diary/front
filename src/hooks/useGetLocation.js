import { useState, useEffect } from 'react';

function useGetLocation() {
  const [myLocation, setMyLocation] = useState(null);

  const successHandler = (response) => {
    const { latitude, longitude } = response.coords;

    setMyLocation({ latitude, longitude });
  };

  const errorHandler = (error) => {
    console.log(error);
  };

  const getLocation = async () => {
    try {
      const response = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      successHandler(response);
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { myLocation, getLocation };
}

export default useGetLocation;
