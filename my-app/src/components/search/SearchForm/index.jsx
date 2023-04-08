import React, { useState, useEffect } from 'react';
import * as S from './style';

function SearchForm({ keyword, setKeyword, onChange }) {
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
    <>
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
            focus={focus}
          />
          {keyword && (
            <S.ClearBtn type='button' onMouseDown={() => handleClearBtn()} focus={focus} />
          )}
        </S.SearchFormContainer>
      </S.SearchForm>

      {focus && (
        <S.CancelBtn focus={focus} onMouseDown={() => handleCancelBtn()}>
          취소
        </S.CancelBtn>
      )}
    </>
  );
}

export default SearchForm;
