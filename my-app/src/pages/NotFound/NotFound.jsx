import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import * as S from './style';

function NotFound() {
  const navigate = useNavigate();

  const goHomeButton = () => {
    navigate('/home');
  };

  return (
    <S.Container>
      <S.Logo />
      <S.Text>페이지를 찾을 수 없습니다.</S.Text>
      <Button size={'md'} text={'홈으로 가기'} onClick={goHomeButton} />
    </S.Container>
  );
}

export default NotFound;
