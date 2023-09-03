import React from 'react';
import * as S from './style';

function MenuButton({ onClick, content, active }) {
  return (
    <S.Button onClick={onClick}>
      <S.ButtonContent active={active}>{content}</S.ButtonContent>
    </S.Button>
  );
}

export default MenuButton;
