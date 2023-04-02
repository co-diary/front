import React from 'react';
import * as S from './style';

function SelectBox({ options, onBlur, handleDisplayList, selected, isOpen, handleClickList }) {
  return (
    <S.Container onBlur={onBlur} onClick={handleDisplayList} options={isOpen} selected={selected}>
      <button>{selected}</button>
      <S.Options options={isOpen}>
        {options.map((option) => (
          <S.Option
            key={option}
            value={option}
            onMouseDown={(e) => {
              handleClickList(e);
            }}
          >
            {option}
          </S.Option>
        ))}
      </S.Options>
    </S.Container>
  );
}

export default SelectBox;
