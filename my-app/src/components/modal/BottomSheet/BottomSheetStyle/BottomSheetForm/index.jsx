import React, { useState } from 'react';
import Button from '../../../../common/Button';
import SearchForm from '../../../../search/SearchForm';
import LocationSearch from '../../../../post/LocationSearch';

import * as S from './style';

function BottomSheetForm({
  title,
  Icon,
  IconAlt,
  onClickIcon,
  handleCurrentLocation,
  currentAddress,
  isLocationCheck,
}) {
  const [inputKeyword, setInputKeyword] = useState('');
  const [keyword, setKeyword] = useState('');

  console.log('입력값:', inputKeyword, '전송값:', keyword);

  const onChange = (e) => {
    e.preventDefault();
    setInputKeyword(e.target.value);
  };

  const handleClearBtn = (e) => {
    setInputKeyword('');
  };

  const submitKeyword = (e) => {
    e.preventDefault();
    if (inputKeyword === '') {
      setKeyword('');
    } else {
      setKeyword(inputKeyword);
    }
  };

  console.log('키워드,체크', keyword);

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
            keyword={inputKeyword}
            setKeyword={setInputKeyword}
            handleClearBtn={handleClearBtn}
            submitKeyword={submitKeyword}
          />
          <Button type='submit' onClick={submitKeyword} text='검색' size='sm' />
        </S.SearchFormContainer>
        <S.LocationBtnBox>
          <S.MyLocation onClick={handleCurrentLocation} isLocationCheck={isLocationCheck}>
            현재 위치
          </S.MyLocation>
          <span>{currentAddress}</span>
        </S.LocationBtnBox>
        <S.SectionBorder />

        <LocationSearch searchKeyword={keyword} />
      </S.Main>
    </>
  );
}

export default BottomSheetForm;
