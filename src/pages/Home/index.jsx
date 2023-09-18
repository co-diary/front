import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import { UserIdState } from '../../atom/authRecoil';
import { appAuth } from '../../firebase';
import * as S from './style';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import DrinkIcon from '../../assets/Icon-beverage.png';
import DessertIcon from '../../assets/Icon-dessert.png';
import CategoryCard from '../../components/home/CategoryCard';
import RecentPosts from '../../components/home/RecentPosts';
import usePost from '../../hooks/usePost';
import ToastMessage from '../../components/notification/ToastMessage';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import withPathnameWatcher from '../../components/hocs/withPathnameWatcher';

function Home() {
  const userId = useRecoilValue(UserIdState);
  const [userName, setUserName] = useState('');
  const { isLoading, isError, data: posts } = usePost(userId, 'ALL');
  const [searchParams, setSearchParams] = useSearchParams();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const getSuccessToast = searchParams.get('success');

    if (getSuccessToast) {
      setShowToast(true);
      setToastMessage('오늘의 커디어리 등록 완료!');
    }
  }, []);

  const handleToastAnimationEnd = () => {
    setShowToast(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      setUserName(user.displayName);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <div>fetch data중 에러</div>;
  }

  const postCount = posts.length;
  const drinkCount = posts.filter((v) => v.theme === '음료').length;
  const dessertCount = posts.filter((v) => v.theme === '디저트').length;

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
          <Suspense fallback={<LoadingIndicator />}>
            <RecentPosts userId={userId} />
          </Suspense>
        </section>
      </S.Container>
      <NavBar />
      {showToast && (
        <ToastMessage
          message={toastMessage}
          showToast={showToast}
          onAnimationEnd={handleToastAnimationEnd}
        />
      )}
    </>
  );
}

export default withPathnameWatcher(Home);
