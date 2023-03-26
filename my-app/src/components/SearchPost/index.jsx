import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

import SearchHeader from './SearchHeader';
import SearchResultView from './SearchResultView';

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

  return (
    <S.Container>
      <SearchHeader leftOnClick={handlePageBack} onChange={onChange} />
      <SearchResultView keyword={keyword} />
    </S.Container>
  );
}

export default SearchPost;
