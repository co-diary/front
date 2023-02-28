import React, { useEffect } from 'react';
import * as S from './style';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import DrinkIcon from '../../assets/Icon-beverage.png';
import DessertIcon from '../../assets/Icon-dessert.png';
import CategoryCard from '../../components/home/CategoryCard/CategoryCard';
import PostCard from '../../components/common/PostCard';
import { firestore } from '../../firebase';

function Home() {
  console.log(firestore.collection('user'));

  useEffect(() => {
    firestore
      .collection('user')
      .get()
      .then((result) => {
        result.forEach((doc) => {
          console.log(doc.data());
        });
      });
  }, []);

  return (
    <>
      <Header
        isHome
        rightChild={
          <>
            <S.HashLink to='/hashtag' />
            <S.SearchLink to='/search' />
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
            <CategoryCard to='/post' title={'음료'} Icon={DrinkIcon} count={'102'} />
            <CategoryCard to='/post' title={'디저트'} Icon={DessertIcon} count={'300+'} />
          </S.CategoryCards>
        </section>
        <section>
          <S.SubTitle>최근 추가된 기록</S.SubTitle>
          <S.Cards>
            <PostCard />
            <PostCard />
            <PostCard />
          </S.Cards>
        </section>
      </S.Container>
      <NavBar page='home' />
    </>
  );
}

export default Home;
