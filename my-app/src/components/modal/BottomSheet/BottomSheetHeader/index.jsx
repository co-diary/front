import React from 'react';
import * as S from './style';
import IconBack from '../../../../assets/Icon-Back.png';

function BottomSheetFormHeader({ title, onClickIcon }) {
  return (
    <>
      <S.BottomSheetTitle>title</S.BottomSheetTitle>
      <S.Button onClick={onClickIcon}>
        <img src={IconBack} alt='뒤로가기' />
      </S.Button>
    </>
  );
}

function BottomSheetHeader({ type, onClickIcon, RightIcon }) {
  return (
    <S.Container>
      <BottomSheetFormHeader />
      {/* <S.CloseHandler /> */}
    </S.Container>
  );
}

BottomSheetHeader.defaultProps = {
  type: 'form',
};

export default BottomSheetHeader;
