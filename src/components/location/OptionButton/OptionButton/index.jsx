import React from 'react';
import * as S from './style';

function OptionButton({ onClick, content }) {
  return (
    <S.Button onClick={onClick}>
      <S.ButtonContent>{content}</S.ButtonContent>
    </S.Button>
  );
}

export default OptionButton;
