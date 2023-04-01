import React, { useCallback, useState } from 'react';
import useOutsideDetect from '../../../hooks/useOutsideDetect';
import * as S from './style';

function CustomSelectbox({ optiondata }) {
  const [isShowOptionCategory, setIsShowOptionCategory, categoryRef, handleDisplayCategory] =
    useOutsideDetect(false);
  const [isShowOptionTheme, setIsShowOptionTheme, themeRef, handleDisplayTheme] =
    useOutsideDetect(false);

  const [currentCategory, setCurrentCategory] = useState(optiondata[0].name);
  const [currentTheme, setCurrentTheme] = useState(optiondata[0].option[0].subName);
  const [currentSelect, setCurrentSelect] = useState(1);

  const handleClickListCategory = useCallback((e) => {
    setCurrentCategory(e.target.innerText);
    setCurrentTheme(
      e.target.innerText === '음료'
        ? optiondata[0].option[0].subName
        : optiondata[1].option[0].subName,
    );
    setIsShowOptionCategory(false);
    e.stopPropagation();
  }, []);

  const handleClickListTheme = useCallback((e) => {
    setCurrentTheme(e.target.innerText);
    setIsShowOptionTheme(false);
    e.stopPropagation();
  }, []);

  const subOption = optiondata.find((category) => category.id === currentSelect).option;

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

export default CustomSelectbox;
