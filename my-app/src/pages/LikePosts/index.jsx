import React from 'react';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';

function LikePosts() {
  return (
    <>
      <Header title='좋아요' />
      <S.Container>카드 컴포넌트</S.Container>
      <NavBar page='liked' />
    </>
  );
}

export default LikePosts;
