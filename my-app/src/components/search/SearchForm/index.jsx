import React, { useState, useEffect } from 'react';
import CancelBtnSlide from './CancelButton';
import * as S from './style';

function SearchForm({ keyword, setKeyword, onChange }) {
  console.log(setKeyword);
  const [focus, setFocus] = useState(false);

  const handleFormBlur = () => {
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
      <S.SearchFormContainer action=''>
        <S.SearchForm
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
            focus={focus}
          />
          {keyword && (
            <S.ClearBtn type='button' onMouseDown={() => handleClearBtn()} focus={focus} />
          )}
        </S.SearchForm>
      </S.SearchFormContainer>
      <CancelBtnSlide handleCancelBtn={handleCancelBtn} focus={focus} />
    </S.Container>
  );
}

export default SearchForm;
