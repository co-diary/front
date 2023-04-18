import React, { useState } from 'react';
import Button from '../../../../common/Button';
import SearchForm from '../../../../search/SearchForm';
import LocationSearch from '../../../../post/LocationSearch';

import * as S from './style';

function BottomSheetForm({ title, Icon, IconAlt, onClickIcon, place, handleCurrentLocation }) {
  const [keyword, setKeyword] = useState('');
  const [focus, setFocus] = useState(false);

  console.log(focus);

  const onChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const handleFormBlur = () => {
    setFocus(false);
  };

  const handleClearBtn = (e) => {
    setKeyword('');
  };

  return (
    <>
      <S.Header>
        <S.BottomSheetTitle>{title}</S.BottomSheetTitle>
        <S.CloseButton onClick={onClickIcon}>
          <img src={Icon} alt={IconAlt} />
        </S.CloseButton>
      </S.Header>
      <S.Main>
        <S.SearchFormContainer>
          <SearchForm
            onChange={onChange}
            keyword={keyword}
            setKeyword={setKeyword}
            handleFormBlur={handleFormBlur}
            handleClearBtn={handleClearBtn}
          />
          <Button text='검색' size='sm' />
        </S.SearchFormContainer>
        <S.LocationBtnBox>
          <S.MyLocation onClick={handleCurrentLocation}>현재 위치</S.MyLocation>
          <span>서울시 커피구 디저트동 00아파트</span>
        </S.LocationBtnBox>
        <S.SectionBorder />

        <LocationSearch />
      </S.Main>
    </>
  );
}

export default BottomSheetForm;
