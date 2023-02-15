import React from 'react';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';

function Map() {
  return (
    <>
      <Header title='지도' />
      <S.Container />
      <NavBar page='map' />
    </>
  );
}

export default Map;
