import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import IconBack from '../../../assets/Icon-Back.png';

function SearchHeader() {
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);

  const navigate = useNavigate();
  const handlePageBack = () => {
    navigate(-1);
  };

  const onChangeSearch = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search.toLowerCase);
  };

  return (
    <S.Container>
      <S.Button onClick={handlePageBack}>
        <img src={IconBack} alt='뒤로가기' />
      </S.Button>
      <S.SearchForm action=''>
        <S.SearchFormContainer>
          <S.Input
            value={search}
            onChange={onChangeSearch}
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
