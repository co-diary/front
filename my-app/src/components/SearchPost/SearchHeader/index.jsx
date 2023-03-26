import React, { useState } from 'react';
import * as S from './style';
import IconBack from '../../../assets/Icon-Back.png';

function SearchHeader({ keyword, onChange, leftOnClick }) {
  const [focus, setFocus] = useState(false);

  return (
    <S.Container>
      <S.Button onClick={leftOnClick}>
        <img src={IconBack} alt='뒤로가기' />
      </S.Button>
      <S.SearchForm action=''>
        <S.SearchFormContainer>
          <S.Input
            value={keyword}
            onChange={onChange}
            type='text'
            placeholder='검색어를 입력하세요.'
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(!focus);
            }}
          />
          {focus && <S.ClearBtn />}
        </S.SearchFormContainer>
      </S.SearchForm>

      {focus && <S.CancelBtn>취소</S.CancelBtn>}
    </S.Container>
  );
}

export default SearchHeader;
