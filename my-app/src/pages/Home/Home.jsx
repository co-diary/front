import React from 'react';
import * as S from './style';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconTag from '../../assets/Icon-tag.png';
// import IconTagActive from '../../assets/Icon-tag-hover.png';
import IconSearch from '../../assets/Icon-Search.png';
import DrinkIcon from '../../assets/Icon-beverage.png';
import DessertIcon from '../../assets/Icon-dessert.png';
import CategoryCard from '../../components/home/CategoryCard/CategoryCard';

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
        <section>
          <S.SectionContainer>
            <S.Title>오늘도 나만의 커디어리를 기록해 보세요!</S.Title>
            <S.Total>
              <S.TotalTxt>전체 기록</S.TotalTxt>
              <S.Count>502</S.Count>
            </S.Total>
          </S.SectionContainer>
        </section>
        <section>
          <S.SubTitle>곽두팔이님의 기록 앨범</S.SubTitle>
          <S.CategoryCards>
            <CategoryCard title={'음료'} Icon={DrinkIcon} count={'102'} />
            <CategoryCard title={'디저트'} Icon={DessertIcon} count={'300+'} />
          </S.CategoryCards>
        </section>
        <section>
          <S.SubTitle>최근 추가된 기록</S.SubTitle>
          <S.Cards>
            <S.Card />
            <S.Card />
            <S.Card />
            <S.Card />
          </S.Cards>
        </section>
      </S.Container>
      <NavBar page='home' />
    </>
  );
}

export default Home;
