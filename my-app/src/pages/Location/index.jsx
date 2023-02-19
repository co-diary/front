import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';

function Location () {
	// 현재 위치를 저장할 상태
	const [location, setLocation] = useState(null); 
	const [position, setPosition] = useState();

	useEffect(() => {

		// 성공시 isSuccess, 실패시 isError 함수가 실행됩니다.
		navigator.geolocation.getCurrentPosition(isSuccess, isError);
	}, []);

	// 성공하면 사용자가 현재 위치한 위도와 경도를 나타냅니다.
	const isSuccess = (response) => {
    const { latitude, longitude} = response.coords;
    
		setLocation({ latitude, longitude });
	};

	const isError = (error) => {
		console.log(error);
	};

	return (
	<>
    <Header title="지도" />
		{location && (
		<Map 
            center = {{ lat: location.latitude, lng: location.longitude }} 
            style = {{ width: '100%', height: '100vh' }} 
            level = {1}
            onClick = {(_t, MouseEvent) =>setPosition({
                lat: MouseEvent.latLng.getLat(),
                lng: MouseEvent.latLng.getLng(),
            })}
        >
            {position && <MapMarker position={position} />}
		<MapMarker 
			position = {{ lat: location.latitude, lng: location.longitude }} 
            draggable = {true} // 마커가 드래그 가능하게 합니다.
        />
		</Map>
		)}
    <NavBar page = "location" />
	</>
	);
}

export default Location;