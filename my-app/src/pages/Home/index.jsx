import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import { authState } from '../../atom/authRecoil';
import { appAuth } from '../../firebase';

import * as S from './style';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import DrinkIcon from '../../assets/Icon-beverage.png';
import DessertIcon from '../../assets/Icon-dessert.png';
import CategoryCard from '../../components/home/CategoryCard';
import getPost from '../../hooks/getPost';
import RecentPosts from '../../components/home/RecentPosts';

function Home() {
  const [userState, setUserState] = useRecoilState(authState);
  const [userName, setUserName] = useState('');
  const [postCount, setPostCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);
  const [dessertCount, setDessertCount] = useState(0);

  const cards = [
    {
      categoryId: 'drink',
      title: '음료',
      icon: DrinkIcon,
      count: drinkCount,
    },
    {
      categoryId: 'dessert',
      title: '디저트',
      icon: DessertIcon,
      count: dessertCount,
    },
  ];

  console.log(userState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      setUserState(user);
      setUserName(user.displayName);
    });

    return unsubscribe;
  }, [setUserState]);

  useEffect(() => {
    getPost('ALL').then((data) => {
      setPostCount(data.length);
      setDrinkCount(data.filter((v) => v.theme === '음료').length);
      setDessertCount(data.filter((v) => v.theme === '디저트').length);
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
              <S.Count>{postCount}</S.Count>
            </S.Total>
          </S.SectionContainer>
        </section>
        <section>
          <S.SubTitle>{userName}님의 기록 앨범</S.SubTitle>
          <S.CategoryCards>
            {cards.map((card) => (
              <CategoryCard
                key={card.categoryId}
                title={card.title}
                Icon={card.icon}
                count={card.count}
              />
            ))}
          </S.CategoryCards>
        </section>
        <section>
          <RecentPosts />
        </section>
      </S.Container>
      <NavBar />
    </>
  );
}

export default Home;
