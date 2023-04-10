import React, { useState } from 'react';
import Button from '../../../../common/Button';
import SearchForm from '../../../../search/SearchForm';

import * as S from './style';

function BottomSheetForm({ title, Icon, IconAlt, onClickIcon }) {
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
        <S.MyLocation>현재 위치</S.MyLocation>
        <S.SectionBorder />

        <S.ResultSection>
          <S.SectionTitle>위치</S.SectionTitle>
          <S.Results>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 청파로71길 10 04304</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 숭인동 1054 03111</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 숭인동 1054 03111</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 숭인동 1054 03111</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 숭인동 1054 03111</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 숭인동 1054 03111</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 숭인동 1054 03111</S.ResultDetail>
            </S.Result>
            <S.Result>
              <S.ResultTitle>이디야</S.ResultTitle>
              <S.ResultDetail>대한민국 서울특별시 숭인동 1054 03111</S.ResultDetail>
            </S.Result>
          </S.Results>
        </S.ResultSection>
      </S.Main>
    </>
  );
}

export default BottomSheetForm;
