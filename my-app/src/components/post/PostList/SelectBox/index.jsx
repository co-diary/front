import React from 'react';
import * as S from './style';

function SelectBox({ handleDisplayList, selected, displayOptions, handleClickList }) {
  return (
    <S.Container onClick={handleDisplayList} options={displayOptions}>
      <button>{selected}</button>
      <S.Options options={displayOptions}>
        <li onClick={handleClickList}>최신순</li>
        <li onClick={handleClickList}>별점순</li>
      </S.Options>
    </S.Container>
  );
}

export default SelectBox;
