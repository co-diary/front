import React from 'react';
import * as S from './style';

function SelectBox({ onBlur, handleDisplayList, selected, displayOptions, handleClickList }) {
  return (
    <S.Container onBlur={onBlur} onClick={handleDisplayList} options={displayOptions}>
      <button>{selected}</button>
      <S.Options options={displayOptions}>
        <S.Option onClick={handleClickList}>최신순</S.Option>
        <S.Option onClick={handleClickList}>별점순</S.Option>
      </S.Options>
    </S.Container>
  );
}

export default SelectBox;
