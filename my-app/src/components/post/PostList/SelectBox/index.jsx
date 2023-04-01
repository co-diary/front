import React from 'react';
import * as S from './style';

function SelectBox({ onBlur, handleDisplayList, selected, isOpen, handleClickList }) {
  return (
    <S.Container onBlur={onBlur} onClick={handleDisplayList} options={isOpen} selected={selected}>
      <button>{selected}</button>
      <S.Options options={isOpen}>
        <S.Option
          onMouseDown={(e) => {
            handleClickList(e);
          }}
        >
          최신순
        </S.Option>
        <S.Option
          onMouseDown={(e) => {
            handleClickList(e);
          }}
        >
          별점순
        </S.Option>
      </S.Options>
    </S.Container>
  );
}

export default SelectBox;
