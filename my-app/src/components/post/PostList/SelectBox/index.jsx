import React, { useState } from 'react';
import * as S from './style';

function SelectBox({ options, onOptionSelected, selected }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnBlur = () => {
    setIsOpen(false);
  };

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelected = (option) => {
    onOptionSelected(option);
    toggleSelectBox();
  };

  return (
    <S.Container
      onBlur={handleOnBlur}
      onClick={toggleSelectBox}
      options={isOpen}
      selected={selected}
    >
      <button>{selected}</button>

      <S.Options options={isOpen}>
        {options.map((option) => (
          <S.Option
            key={option}
            value={option}
            onMouseDown={() => {
              handleOptionSelected(option);
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
