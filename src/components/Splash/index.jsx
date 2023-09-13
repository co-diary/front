import React from 'react';
import logoImg from '../../assets/Logo-text.png';
import * as S from './style';

function Splash() {
  return (
    <S.Container>
      <S.LogoImg src={logoImg} alt={'로고'} />
    </S.Container>
  );
}

export default Splash;
