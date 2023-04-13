import React from 'react';
import { useLocation } from 'react-router';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import * as S from './style';

function HashtagResult() {
  const location = useLocation();

  const keyword = location.state.data;

  return (
    <>
      <Header title={`#${keyword}`} />
      <S.Container>카드 컴포넌트</S.Container>
      <NavBar />
    </>
  );
}

export default HashtagResult;
