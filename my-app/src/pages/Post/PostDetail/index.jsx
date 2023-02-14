import React from 'react';
import Header from '../../../components/common/Header';
import * as S from './style';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconPrev from '../../../assets/Icon-detail-prev.png';
import IconNext from '../../../assets/Icon-detail-next.png';

function PostDetail() {
  return (
    <>
      <Header />
      <S.Container>
        <header>
          <h1 className='ir'>게시글 상세 페이지</h1>
        </header>
        <S.Section>
          <h2 className='ir'>게시글 날짜, 메뉴명과 별점</h2>
          <S.DateInfo>23.02.13</S.DateInfo>
          <S.MenuInfo>촉촉한 쇼콜라 퐁당</S.MenuInfo>
          <S.StarRatingContainer>
            <img src={IconStarOn} alt='별점(더 자세한 설명?)' />
            <img src={IconStarOn} alt='별점' />
            <img src={IconStarOn} alt='별점' />
            <img src={IconStarOn} alt='별점' />
            <img src={IconStarOn} alt='별점' />
          </S.StarRatingContainer>
        </S.Section>
        <S.Section>
          <h2 className='ir'>메뉴 후기와 매장 정보</h2>
          <S.MenuImg
            src='https://raw.githubusercontent.com/christianB053/likelion/develop/coffee-2139592_960_720.jpg'
            alt='사용자가 올린 음료 사진'
          />
          <S.ListContainer>
            <S.ListItem>
              <S.ListTitle>후기</S.ListTitle>
              <p>
                각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계
                행정기관에 필요한 지시를 할 수 있다. 정부는 예산에 변경을 가할 필요가 있을 때에는
                추가경정예산안을
              </p>
            </S.ListItem>
            <S.ListItem>
              <S.ListTitle>매장 정보</S.ListTitle>
              <S.DlContainer>
                <S.DlBox>
                  <S.DlTitle>가격</S.DlTitle>
                  <dd>5,000원</dd>
                </S.DlBox>
                <S.DlBox>
                  <S.DlTitle>상호명</S.DlTitle>
                  <dd>훵브라더스로스터리 송파점</dd>
                </S.DlBox>
                <S.DlBox>
                  <S.DlTitle>위치</S.DlTitle>
                  <dd>서울시 송파구 송파대로</dd>
                </S.DlBox>
              </S.DlContainer>
            </S.ListItem>
            <S.ListItem>
              <S.ListTitle>태그</S.ListTitle>
              <S.TagLink to='#'>#넘맛탱</S.TagLink>
              <S.TagLink to='#'>#또와야지</S.TagLink>
            </S.ListItem>
          </S.ListContainer>
          <S.BtnContainer>
            <S.Btn>
              <img src={IconPrev} alt='이전 게시글 보기' />
            </S.Btn>
            <S.Btn>
              <img src={IconNext} alt='다음 게시글 보기' />
            </S.Btn>
          </S.BtnContainer>
        </S.Section>
      </S.Container>
    </>
  );
}

export default PostDetail;
