import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './style';
import placeState from '../../../atom/mapRecoil';

function LocationSearch({ searchKeyword, isInputNull }) {
  const { kakao } = window;
  const place = useRecoilValue(placeState);

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  console.log('불러오기: ', markers, '마커클릭:', info);

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchKeyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        const marker = [];

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          marker.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
            address: data[i].road_address_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(marker);

        map.setBounds(bounds);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        console.log('검색 결과가 존재하지 않습니다.');
      } else if (status === kakao.maps.services.Status.ERROR) {
        console.log('검색 결과 중 오류가 발생했습니다.');
      }
    });
  }, [searchKeyword]);

  return (
    <>
      <div id='map'>
        <Map center={place} style={{ width: '100%', height: '360px' }} level={3} onCreate={setMap}>
          <MapMarker position={place}>
            <div style={{ color: '#000', align: 'center' }}>My co-diary!</div>
          </MapMarker>

          {isInputNull &&
            markers.map((marker) => (
              <MapMarker
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                position={marker.position}
                onClick={() => setInfo(marker)}
              >
                {info && info.content === marker.content && (
                  <div style={{ color: '#000' }}>{marker.content}</div>
                )}
              </MapMarker>
            ))}
        </Map>
      </div>
      <S.ResultSection>
        <S.SectionTitle>위치</S.SectionTitle>
        <S.ResultBox>
          <S.Results>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
          </S.Results>
        </S.ResultBox>
      </S.ResultSection>
    </>
  );
}

export default LocationSearch;
