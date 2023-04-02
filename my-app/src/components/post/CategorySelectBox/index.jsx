import React from 'react';
import * as S from './style';

function CategorySelectBox({
  boxValue,
  optiondata,
  selectedRef,
  isShowOption,
  handleClickList,
  currentSelected,
  handleDisplay,
  handleCheckCategory,
  subOption,
}) {
  return (
    <S.SelectBox options={isShowOption} onClick={handleDisplay} ref={selectedRef}>
      <S.CurrentSelect type='button' options={isShowOption}>
        {currentSelected}
      </S.CurrentSelect>
      {boxValue === true
        ? isShowOption && (
            <S.ListBox onClick={(e) => handleClickList(e)} options={isShowOption}>
              {optiondata.map((option) => (
                <S.ListOption key={option.id} onClick={() => handleCheckCategory(option.id)}>
                  {option.name}
                </S.ListOption>
              ))}
            </S.ListBox>
          )
        : isShowOption && (
            <S.ListBox onClick={(e) => handleClickList(e)} options={isShowOption}>
              {subOption.map((option) => (
                <S.ListOption key={option.subId}>{option.subName}</S.ListOption>
              ))}
            </S.ListBox>
          )}
    </S.SelectBox>
  );
}

export default CategorySelectBox;
