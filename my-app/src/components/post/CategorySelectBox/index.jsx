import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import useOutsideDetect from '../../../hooks/useOutsideDetect';
import IconSelectOn from '../../../assets/Icon-Select-on.png';
import IconSelectOff from '../../../assets/Icon-Select-off.png';

export const SSelectBox = styled.div`
  position: relative;
  width: 8.8rem;
  font-size: 1.4rem;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3.8rem;
  cursor: pointer;

  &:hover {
    border-color: ${Theme.MAIN};
  }
`;

export const SCurrentSelect = styled.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  text-align: start;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    top: 0.6rem;
    right: 0.8rem;
    background: center / contain no-repeat;
    background-image: ${({ options }) =>
      options ? `url(${IconSelectOn})` : `url(${IconSelectOff})`};
  }
`;

export const SListBox = styled.ul`
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  background-color: ${Theme.WHITE};
  border: 1px solid ${Theme.MAIN};
  border-radius: 0.8rem;
  border-width: ${({ options }) => (options ? '1px' : '0')};
  max-height: ${({ options }) => (options ? 'none' : '0')};
  overflow: hidden;
  z-index: 99;
`;

export const SListOption = styled.li`
  margin: 0.4rem;
  padding: 0.7rem 0.8rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    font-family: 'LINESeedKR-Bd';
    background-color: ${Theme.MAIN};
  }

  & + li {
    margin-top: 0rem;
  }
`;

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
      <SSelectBox options={isShowOptionCategory} onClick={handleDisplayCategory} ref={categoryRef}>
        <SCurrentSelect type='button' options={isShowOptionCategory}>
          {currentCategory}
        </SCurrentSelect>
        {isShowOptionCategory && (
          <SListBox options={isShowOptionCategory} onClick={handleClickListCategory}>
            {optiondata.map((option) => (
              <SListOption key={option.id} onClick={() => setCurrentSelect(option.id)}>
                {option.name}
              </SListOption>
            ))}
          </SListBox>
        )}
      </SSelectBox>
      <SSelectBox options={isShowOptionTheme} onClick={handleDisplayTheme} ref={themeRef}>
        <SCurrentSelect type='button' options={isShowOptionTheme}>
          {currentTheme}
        </SCurrentSelect>
        {isShowOptionTheme && (
          <SListBox options={isShowOptionTheme} onClick={handleClickListTheme}>
            {subOption.map((option) => (
              <SListOption key={option.subId}>{option.subName}</SListOption>
            ))}
          </SListBox>
        )}
      </SSelectBox>
    </>
  );
}

export default CustomSelectbox;
