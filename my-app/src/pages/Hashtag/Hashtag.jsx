import React from 'react';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';

function Hashtag() {
  return (
    <>
      <Header title='태그 모아보기' />
      <S.Container>
        <S.TagBox>
          <S.TagList>
            <S.TagLink to='/hashtag/keyword'>#달아요요오호</S.TagLink>
          </S.TagList>
          <S.TagList>
            <S.TagLink to='/hashtag/keyword'>#달아요요호</S.TagLink>
          </S.TagList>
          <S.TagList>
            <S.TagLink to='/hashtag/keyword'>#달아요호</S.TagLink>
          </S.TagList>
          <S.TagList>
            <S.TagLink to='/hashtag/keyword'>#달아요요오호</S.TagLink>
          </S.TagList>
          <S.TagList>
            <S.TagLink to='/hashtag/keyword'>#달아</S.TagLink>
          </S.TagList>
          <S.TagList>
            <S.TagLink to='/hashtag/keyword'>#달아요요호</S.TagLink>
          </S.TagList>
        </S.TagBox>
      </S.Container>
      <NavBar />
    </>
  );
}

export default Hashtag;
