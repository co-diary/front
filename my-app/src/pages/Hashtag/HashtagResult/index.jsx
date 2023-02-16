import React from 'react';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import * as S from './style';

function HashtagResult() {
  return (
    <>
      <Header title='#달아요' />
      <S.Container>카드 컴포넌트</S.Container>
      <NavBar />
    </>
  );
}

export default HashtagResult;
