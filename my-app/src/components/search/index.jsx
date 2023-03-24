import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import IconBack from '../../assets/Icon-Back.png';
import useToggle from '../../hooks/useToggle';

function SearchHeader({
  isHome,
  title,
  rightIconOne,
  altOne,
  onClickOne,
  rightIconTwo,
  altTwo,
  onClickTwo,
}) {
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useToggle(false);
  const navigate = useNavigate();
  const handlePageBack = () => {
    navigate(-1);
  };

  const onChangeSearch = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  console.log(focus);
  return (
    <S.Container>
      <S.Button onClick={handlePageBack}>
        <img src={IconBack} alt='뒤로가기' />
      </S.Button>
      <S.SearchForm action=''>
        <S.Input
          value={search}
          onChange={onChangeSearch}
          onFocus={() => {
            console.log('focus됨');
          }}
          type='text'
          placeholder='검색어를 입력하세요.'
        />
      </S.SearchForm>
      <S.CancelBtn>취소</S.CancelBtn>
    </S.Container>
  );
}

export default SearchHeader;
