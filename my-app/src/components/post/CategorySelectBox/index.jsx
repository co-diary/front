import React from 'react';
import * as S from './style';

function CategorySelectBox({
  optiondata,
  categoryRef,
  isShowOptionCategory,
  handleClickListCategory,
  currentCategory,
  handleDisplayCategory,
  subOption,
  themeRef,
  isShowOptionTheme,
  handleClickListTheme,
  handleDisplayTheme,
  currentTheme,
  setCurrentSelect,
}) {
  return (
    <>
      <S.SelectBox options={isShowOptionCategory} onClick={handleDisplayCategory} ref={categoryRef}>
        <S.CurrentSelect type='button' options={isShowOptionCategory}>
          {currentCategory}
        </S.CurrentSelect>
        {isShowOptionCategory && (
          <S.ListBox options={isShowOptionCategory} onClick={handleClickListCategory}>
            {optiondata.map((option) => (
              <S.ListOption key={option.id} onClick={() => setCurrentSelect(option.id)}>
                {option.name}
              </S.ListOption>
            ))}
          </S.ListBox>
        )}
      </S.SelectBox>
      <S.SelectBox options={isShowOptionTheme} onClick={handleDisplayTheme} ref={themeRef}>
        <S.CurrentSelect type='button' options={isShowOptionTheme}>
          {currentTheme}
        </S.CurrentSelect>
        {isShowOptionTheme && (
          <S.ListBox options={isShowOptionTheme} onClick={handleClickListTheme}>
            {subOption.map((option) => (
              <S.ListOption key={option.subId}>{option.subName}</S.ListOption>
            ))}
          </S.ListBox>
        )}
      </S.SelectBox>
    </>
  );
}

export default CategorySelectBox;
