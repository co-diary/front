import React from 'react';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';

function LikePosts() {
  return (
    <>
      <Header title='좋아요' />
      <S.Container>
        <header>
          <h1 className='ir'>좋아요 게시글 페이지</h1>
        </header>
        <S.LikedPostContainer>좋아요 게시글</S.LikedPostContainer>
      </S.Container>
      <NavBar />
    </>
  );
}

export default LikePosts;
