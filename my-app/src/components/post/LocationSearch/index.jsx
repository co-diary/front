import React from 'react';
import * as S from './style';

function LocationSearch() {
  return (
    <>
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
