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
import PostCard from '../../components/post/PostCard';

import getPost from '../../hooks/getPost';

function Home() {
  const [userState, setUserState] = useRecoilState(authState);
  const [userName, setUserName] = useState('');
  const [postCount, setPostCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);
  const [dessertCount, setDessertCount] = useState(0);

  const [recentPosts, setRecentPosts] = useState([]);

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

  useEffect(() => {
    getPost('ORDER_BY', 'createAt', 'desc').then((data) => {
      setRecentPosts(data.slice(0, 3));
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
          <S.SubTitle>최근 추가된 기록</S.SubTitle>
          <S.Cards>
            {recentPosts.map((post) => (
              <PostCard
                key={post.key}
                date={post.date}
                like={post.like}
                location={post.location}
                menu={post.menu}
                photo={post.photo}
                review={post.review}
                score={post.score}
                shop={post.shop}
                tags={post.tag}
              />
            ))}
          </S.Cards>
        </section>
      </S.Container>
      <NavBar page='home' />
    </>
  );
}

export default Home;
