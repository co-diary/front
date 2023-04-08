import React from 'react';
import * as S from './style';

function BottomSheetHeader({ title, Icon, IconAlt, onClickIcon, child }) {
  return (
    <>
      <header>
        <S.BottomSheetTitle>{title}</S.BottomSheetTitle>
        <S.Button onClick={onClickIcon}>
          <img src={Icon} alt={IconAlt} />
        </S.Button>
      </header>
      {child}
    </>
  );
}

function BottomSheetForm() {
  return (
    <>
      <BottomSheetHeader />
      <S.MainContainer>
        <h1>구현</h1>
        <S.Section />
        <S.Section />
        <S.SectionBorder />
        <S.Result />
      </S.MainContainer>
    </>
  );
}

export default BottomSheetForm;
