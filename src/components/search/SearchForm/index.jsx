import React, { useState, useEffect } from 'react';
import * as S from './style';

function SearchForm({ keyword, setKeyword, onChange, children, submitKeyword }) {
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (!keyword) {
      setKeyword('');
    }
  }, []);

  const inputWidth = children ? 'calc(100% - 4rem)' : '100%'; // InputContainer의 width를 children의 유무에 따라 조절

  return (
    <S.Container>
      <S.SearchFormContainer action=''>
        <S.SearchForm
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => handleFormBlur()}
          onSubmit={submitKeyword}
          onKeyDown={handleKeyDown}
        >
          <S.InputContainer focus={focus} width={inputWidth}>
            <S.Input
              value={keyword}
              onChange={onChange}
              type='text'
              placeholder='검색어를 입력하세요.'
            />
            {keyword && (
              <S.ClearBtn type='button' onMouseDown={() => handleClearBtn()} focus={focus} />
            )}
          </S.InputContainer>
        </S.SearchForm>
      </S.SearchFormContainer>

      {children && React.cloneElement(children, { handleCancelBtn, focus })}

      {/* <CancelBtnSlide handleCancelBtn={handleCancelBtn} focus={focus} /> */}
    </S.Container>
  );
}

export default SearchForm;
