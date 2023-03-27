import React, { useState, useEffect } from 'react';
import * as S from './style';
import IconBack from '../../../assets/Icon-Back.png';

function SearchHeader({ keyword, setKeyword, onChange, leftOnClick }) {
  const [focus, setFocus] = useState(false);

  // const 블러함수 = () => {
  //   if () {
  //     console.log('이거실행');
  //   }
  //   console.log('블러됨');
  //   setFocus(!focus);
  // };

  useEffect(() => {
    if (!keyword) {
      setKeyword('');
    }
  }, []);

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
          {keyword && <S.ClearBtn />}
        </S.SearchFormContainer>
      </S.SearchForm>

      {focus && <S.CancelBtn>취소</S.CancelBtn>}
    </S.Container>
  );
}

export default SearchHeader;
