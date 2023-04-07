import React from 'react';
import * as S from './style';
import IconBack from '../../../../assets/Icon-X.png';

// 폼 헤더 컴포넌트

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

function BottomSheetHeader({ type }) {
  return (
    <S.Container>{type === 'form' ? <BottomSheetFormHeader /> : <S.CloseHandler />}</S.Container>
  );
}

BottomSheetHeader.defaultProps = {
  type: 'default',
};

export default BottomSheetHeader;
