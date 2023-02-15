import React from 'react';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';

function Hashtag() {
  return (
    <>
      <Header title='태그 모아보기' />
      <S.Container>
        <S.TagList>
          <S.Tag>#달아요요오호</S.Tag>
          <S.Tag>#다시먹을것</S.Tag>
          <S.Tag>#마따</S.Tag>
          <S.Tag>#또먹</S.Tag>
        </S.TagList>
      </S.Container>
      <NavBar />
    </>
  );
}

export default Hashtag;
