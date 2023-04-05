import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { updateDoc, doc, setDoc, deleteField } from 'firebase/firestore';
import { db } from '../../../firebase';
import Header from '../../../components/common/Header';
import * as S from './style';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconStarOff from '../../../assets/Icon-star-off.png';
import IconPrev from '../../../assets/Icon-detail-prev.png';
import IconNext from '../../../assets/Icon-detail-next.png';
import IconHeartOff from '../../../assets/Icon-Heart-off.png';
import IconHeartOn from '../../../assets/Icon-Heart-on.png';
import IconMore from '../../../assets/Icon-More.png';
import currentPost from '../../../atom/postRecoil';
import { authState } from '../../../atom/authRecoil';

function PostDetail() {
  const user = useRecoilValue(authState);
  const postState = useRecoilValue(currentPost);
  // 추후 리코일에서 liked 값 가져오도록???
  const [isLiked, setIsLiked] = useState(false);
  const postRef = doc(db, 'post', postState.postId);
  const scoreIndexs = [0, 1, 2, 3, 4];
  const menuPrice = postState.price;
  const priceComma = menuPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  useEffect(() => {
    updatePost();
  }, []);

  const handleLikedBtn = () => {
    setIsLiked((prev) => !prev);
    updatePost();
    console.log('안', isLiked);
  };

  const updatePost = async () => {
    await updateDoc(postRef, {
      like: isLiked,
    });

    if (isLiked) {
      await setDoc(doc(db, 'liked', user.uid), {
        [postState.postId]: postState,
      });
    } else {
      await updateDoc(doc(db, 'liked', user.uid), {
        [postState.postId]: deleteField(),
      });
    }
  };

  console.log('바깥', isLiked);

  const handleModal = () => {
    console.log('모달 클릭');
  };

  return (
    <>
      <Header
        title={postState.category}
        rightChild={
          <>
            <S.HeaderBtn onClick={handleLikedBtn}>
              {isLiked ? (
                <img src={IconHeartOn} alt='좋아요 활성화' />
              ) : (
                <img src={IconHeartOff} alt='좋아요 비활성화' />
              )}
            </S.HeaderBtn>
            <S.HeaderBtn onClick={handleModal}>
              <img src={IconMore} alt='더보기 버튼' />
            </S.HeaderBtn>
          </>
        }
      />
      <S.Container>
        <header>
          <h1 className='ir'>게시글 상세 페이지</h1>
        </header>
        <S.Section>
          <h2 className='ir'>게시글 날짜, 메뉴명과 별점</h2>
          <S.DateInfo>23.02.13</S.DateInfo>
          <S.MenuInfo>{postState.menu}</S.MenuInfo>
          <S.StarRatingContainer>
            {scoreIndexs.map((index) =>
              postState.score > index ? (
                <img src={IconStarOn} alt='별점' key={index} />
              ) : (
                <img src={IconStarOff} alt='체크되지 않은 별점' aria-hidden='true' key={index} />
              ),
            )}
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
              <p>{postState.review}</p>
            </S.ListItem>
            <S.ListItem>
              <S.ListTitle>매장 정보</S.ListTitle>
              <S.DlContainer>
                <S.DlBox>
                  <S.DlTitle>가격</S.DlTitle>
                  <dd>{priceComma}원</dd>
                </S.DlBox>
                <S.DlBox>
                  <S.DlTitle>상호명</S.DlTitle>
                  <dd>{postState.shop}</dd>
                </S.DlBox>
                <S.DlBox>
                  <S.DlTitle>위치</S.DlTitle>
                  <dd>{postState.location}</dd>
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
