import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

import SearchHeader from './SearchHeader';
import SearchResultView from './SearchResultView';
import useDebounce from '../../hooks/useDebounce';

function SearchPost() {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();
  const handlePageBack = () => {
    navigate(-1);
  };

  const onChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const debouncedSearchTxt = useDebounce(keyword, 300);

  return (
    <S.Container>
      <SearchHeader
        leftOnClick={handlePageBack}
        onChange={onChange}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <SearchResultView keyword={debouncedSearchTxt} />
    </S.Container>
  );
}

export default SearchPost;
