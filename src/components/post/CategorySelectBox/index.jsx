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
  currentSelectList,
  handleCheckTheme,
  currentSelectCategory,
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
                <S.ListOption
                  key={option.id}
                  onClick={() => handleCheckTheme(option.id)}
                  currentSelectList={currentSelectList}
                >
                  {option.name}
                </S.ListOption>
              ))}
            </S.ListBox>
          )
        : isShowOption && (
            <S.ListBox onClick={(e) => handleClickList(e)} options={isShowOption}>
              {subOption.map((option) => (
                <S.ListOption
                  key={option.subId}
                  onClick={() => handleCheckCategory(option.subId)}
                  currentSelectList={currentSelectCategory}
                >
                  {option.subName}
                </S.ListOption>
              ))}
            </S.ListBox>
          )}
    </S.SelectBox>
  );
}

export default CategorySelectBox;
