import React from 'react';
import * as S from './style';

function ConfirmModal({
  visible,
  onClickClose,
  msg,
  leftBtnMsg,
  leftOnclick,
  rightBtnMsg,
  rightOnclick,
}) {
  return (
    <>
      <S.Background visible={visible} onClick={onClickClose} />
      <S.Box visible={visible}>
        <S.Msg>{msg}</S.Msg>
        <S.Btns>
          <S.Btn onClick={leftOnclick}>{leftBtnMsg}</S.Btn>
          <S.BtnRed onClick={rightOnclick}>{rightBtnMsg}</S.BtnRed>
        </S.Btns>
      </S.Box>
    </>
  );
}

export default ConfirmModal;
