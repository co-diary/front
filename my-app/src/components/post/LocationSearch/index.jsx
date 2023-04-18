import React from 'react';
import { useRecoilValue } from 'recoil';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './style';
import placeState from '../../../atom/mapRecoil';

function LocationSearch() {
  const defaultLocation = useRecoilValue(placeState);

  return (
    <>
      <div id='map' className='ir'>
        <Map center={defaultLocation} style={{ width: '100%', height: '360px' }}>
          <MapMarker position={defaultLocation}>
            <div style={{ color: '#000', align: 'center' }}>My co-diary!</div>
          </MapMarker>
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
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
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
