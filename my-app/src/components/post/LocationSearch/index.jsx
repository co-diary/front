import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './style';

function LocationSearch() {
  return (
    <>
      <div id='map'>
        <Map
          center={{ lat: 37.566381, lng: 126.977717 }}
          style={{ width: '100%', height: '360px' }}
        >
          <MapMarker position={{ lat: 37.566381, lng: 126.977717 }}>
            <div style={{ color: '#000', align: 'center' }}>My co-diary!</div>
          </MapMarker>
        </Map>
      </div>
      <S.ResultSection>
        <S.SectionTitle>위치</S.SectionTitle>
        <S.Results>
          <S.Result>
            <S.ResultTitle>이디야</S.ResultTitle>
            <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
          </S.Result>
        </S.Results>
      </S.ResultSection>
    </>
  );
}

export default LocationSearch;
