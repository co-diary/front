import React, { useState, useEffect } from 'react';
import * as S from './style';
import IconBack from '../../../assets/Icon-Back.png';

function SearchHeader({ keyword, setKeyword, onChange, leftOnClick }) {
  const [focus, setFocus] = useState(false);

  const handleFormBlur = () => {
    if (keyword) {
      console.log('이거실행');
    }
    setFocus(false);
  };

  const handleCancelBtn = () => {
    setFocus(false);
    setKeyword('');
  };

  const handleClearBtn = (e) => {
    setKeyword('');
  };

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
        <S.SearchFormContainer
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => handleFormBlur()}
        >
          <S.Input
            value={keyword}
            onChange={onChange}
            type='text'
            placeholder='검색어를 입력하세요.'
          />
          {keyword && <S.ClearBtn type='button' onClick={() => handleClearBtn()} />}
        </S.SearchFormContainer>
      </S.SearchForm>

      {focus && <S.CancelBtn onMouseDown={() => handleCancelBtn()}>취소</S.CancelBtn>}
    </S.Container>
  );
}

export default SearchHeader;
