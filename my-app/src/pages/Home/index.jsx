import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { authState } from '../../atom/authRecoil';
import { appAuth, firestore } from '../../firebase';

import * as S from './style';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import DrinkIcon from '../../assets/Icon-beverage.png';
import DessertIcon from '../../assets/Icon-dessert.png';
import CategoryCard from '../../components/home/CategoryCard';
import PostCard from '../../components/common/PostCard';

function Home() {
  const [userState, setUserState] = useRecoilState(authState);
  const [userName, setUserName] = useState('');
  const [postCount, setPostCount] = useState();
  const [drinkCount, setDrinkCount] = useState(0);
  const [dessertCount, setdessertCount] = useState(0);

  const navigate = useNavigate();

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      console.log(userState);
      setUserState(user);
      setUserName(user.displayName);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    firestore
      .collection('post')
      .get()
      .then((result) => {
        result.forEach((doc) => {
          setPostCount(doc.data.length);
          doc.data().theme === '음료'
            ? setDrinkCount(drinkCount + 1)
            : setdessertCount(dessertCount + 1);
        });
      });
  }, []);

  const onClickCard = () => {
    console.log('onClickCard 실행');
    navigate('/post', {
      state: { ...cards },
    });
  };

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
                onClickCard={onClickCard}
              />
            ))}
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
