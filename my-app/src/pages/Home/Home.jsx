import React from 'react';
import * as S from './style';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconTag from '../../assets/Icon-tag.png';
// import IconTagActive from '../../assets/Icon-tag-hover.png';
import IconSearch from '../../assets/Icon-Search.png';

function Home() {
  return (
    <>
      <Header
        rightChild={
          <>
            <S.HeaderBtn>
              <img src={IconTag} alt='태그 검색 바로가기' />
            </S.HeaderBtn>
            <S.HeaderBtn>
              <img src={IconSearch} alt='검색 바로가기' />
            </S.HeaderBtn>
          </>
        }
      />
      <S.Container>
        <S.Section>
          <S.SectionContainer>
            <S.Title>오늘도 나만의 커디어리를 기록해 보세요!</S.Title>
            <S.Total>
              <S.TotalTxt>전체 기록</S.TotalTxt>
              <S.Count>502</S.Count>
            </S.Total>
          </S.SectionContainer>
        </S.Section>
        <S.Section>
          <S.SectionTitle>곽두팔이님의 기록 앨범</S.SectionTitle>
          <S.Category>
            <S.CategoryCount>102</S.CategoryCount>
            <S.CategoryCard>
              <img src='' alt='' />
              <figcaption>음료</figcaption>
            </S.CategoryCard>
          </S.Category>
          <S.Category>
            <p>300+</p>
            <S.CategoryCard>
              <img src='' alt='' />
              <figcaption>디저트</figcaption>
            </S.CategoryCard>
          </S.Category>
        </S.Section>
        <S.Section>
          <S.SectionTitle>최근 추가된 기록</S.SectionTitle>
          <S.Cards>
            <S.Card />
            <S.Card />
            <S.Card />
            <S.Card />
          </S.Cards>
        </S.Section>
      </S.Container>
      <NavBar />
    </>
  );
}

export default Home;
