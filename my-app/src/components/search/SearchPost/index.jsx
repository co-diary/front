import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

import SearchHeader from './SearchHeader';
import SearchResultView from './SearchResultView';
import useDebounce from '../../../hooks/useDebounce';
import SearchForm from '../SearchForm';
import CancelBtnSlide from '../SearchForm/CancelButton';

function SearchPost() {
  const [keyword, setKeyword] = useState('');
  const [focus, setFocus] = useState(false);

  console.log(focus);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const onChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

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

  const debouncedSearchTxt = useDebounce(keyword, 400);

  return (
    <S.Container>
      <SearchHeader leftOnClick={goBack}>
        <SearchForm
          onChange={onChange}
          keyword={keyword}
          setKeyword={setKeyword}
          handleFormBlur={handleFormBlur}
          handleCancelBtn={handleCancelBtn}
          handleClearBtn={handleClearBtn}
        >
          <CancelBtnSlide />
        </SearchForm>
      </SearchHeader>

      <SearchResultView keyword={debouncedSearchTxt} />
    </S.Container>
  );
}

export default SearchPost;
