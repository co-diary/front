import React from 'react';
import * as S from './style.js';

function ToastMessage({ message }) {
  return (
    <S.ToastBox>
      <S.ToastText>{message}</S.ToastText>
    </S.ToastBox>
  );
}

export default ToastMessage;
