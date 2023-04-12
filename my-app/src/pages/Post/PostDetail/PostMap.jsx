import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import currentPost from '../../../atom/currentPostRecoil';

export default function PostMap() {
  const post = useRecoilValue(currentPost);
  const addressLatLng = post?.address.latLng;

  const newScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.src = src;
      script.addEventListener('load', () => {
        resolve();
      });
      script.addEventListener('error', (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });

  useEffect(() => {
    const myScript = newScript(
      'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1f04f013816838039b956a5bff2f9acb',
    );

    myScript.then(() => {
      const kakao = window.kakao;

      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(addressLatLng[0], addressLatLng[1]),
          level: 5,
        };
        const map = new kakao.maps.Map(mapContainer, options);
        const markerPosition = new kakao.maps.LatLng(addressLatLng[0], addressLatLng[1]);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    });
  }, []);

  return <></>;
}
