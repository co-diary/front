import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

import SearchHeader from './SearchHeader';
import SearchResultView from './SearchResultView';
import useDebounce from '../../../hooks/useDebounce';
import SearchForm from '../SearchForm';

function SearchPost() {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const onChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const debouncedSearchTxt = useDebounce(keyword, 400);

  return (
    <S.Container>
      <SearchHeader leftOnClick={goBack}>
        <SearchForm onChange={onChange} keyword={keyword} setKeyword={setKeyword} />
      </SearchHeader>

      <SearchResultView keyword={debouncedSearchTxt} />
    </S.Container>
  );
}

export default SearchPost;
