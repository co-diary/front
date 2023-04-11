import React from 'react';
import * as S from './style';
import IconBack from '../../../../assets/Icon-Back.png';

function SearchHeader({ leftOnClick, children }) {
  return (
    <S.Container>
      <S.Button onClick={leftOnClick}>
        <img src={IconBack} alt='뒤로가기' />
      </S.Button>
      {children}
    </S.Container>
  );
}

export default SearchHeader;
