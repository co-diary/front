import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './style';
import placeState from '../../../atom/mapRecoil';

function LocationSearch({ searchKeyword, isInputNull, inputKeyword }) {
  const { kakao } = window;
  const place = useRecoilValue(placeState);

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [errorStatus, setErrorStatus] = useState({
    error: false,
    errorMsg: '오늘은 어디에 갔다오셨나요? 😀',
  });

  console.log('불러오기: ', markers, '마커클릭:', info, 'bool: ', isInputNull);

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
        setErrorStatus({
          ...errorStatus,
          error: false,
        });

        map.setBounds(bounds);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        setErrorStatus({
          ...errorStatus,
          error: true,
          errorMsg: '검색 결과가 존재하지 않습니다.',
        });
      } else if (status === kakao.maps.services.Status.ERROR) {
        setErrorStatus({
          ...errorStatus,
          error: true,
          errorMsg: '검색 결과 중 오류가 발생했습니다.',
        });
      }
    });
  }, [searchKeyword]);

  console.log('에러상태:', errorStatus.error);

  return (
    <>
      <div id='map' className='ir'>
        <Map center={place} style={{ width: '100%', height: '360px' }} level={3} onCreate={setMap}>
          {!isInputNull ? (
            <MapMarker position={place}>
              <div style={{ color: '#000', align: 'center' }}>My co-diary!</div>
            </MapMarker>
          ) : (
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
            ))
          )}
        </Map>
      </div>
      <S.ResultSection>
        <S.SectionTitle>위치</S.SectionTitle>
        <S.ResultBox>
          <S.Results>
            {inputKeyword === searchKeyword && isInputNull && !errorStatus.error ? (
              markers.map((places) => (
                <S.Result
                  key={`places-${places.content}-${places.position.lat},${places.position.lng}`}
                  isListShow={true}
                >
                  <S.ResultTitle>{places.content}</S.ResultTitle>
                  <S.ResultDetail>{places.address}</S.ResultDetail>
                </S.Result>
              ))
            ) : (
              <S.Result isListShow={false}>
                <S.ResultTitle>{errorStatus.errorMsg}</S.ResultTitle>
              </S.Result>
            )}
          </S.Results>
        </S.ResultBox>
      </S.ResultSection>
    </>
  );
}

export default LocationSearch;
