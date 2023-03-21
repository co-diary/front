import React from 'react';
import * as S from './style';
import IconHeartOff from '../../../assets/Icon-Heart-off.png';
import IconStarOn from '../../../assets/Icon-star-on.png';

function PostCard({ date, like, location, menu, photo, review, score, shop, tag }) {
  return (
    <S.PostCardBox>
      <S.PostCover>
        <span>01.00</span>
        <img src={photo} alt='메뉴 썸네일 사진' />
      </S.PostCover>
      <S.PostContent>
        <S.PostInfo>
          <S.PostLike>
            <img src={IconHeartOff} alt='좋아요 on/off' />
          </S.PostLike>
          <S.StarRatingContainer>
            <img src={IconStarOn} alt='별점(더 자세한 설명?)' />
            <img src={IconStarOn} alt='별점' />
            <img src={IconStarOn} alt='별점' />
            <img src={IconStarOn} alt='별점' />
            <img src={IconStarOn} alt='별점' />
          </S.StarRatingContainer>
          <S.MenuInfo>{menu}</S.MenuInfo>
          <S.StoreInfo>
            {shop}&nbsp;{location}
          </S.StoreInfo>
        </S.PostInfo>
        <S.PostReview>
          <p>{review}</p>
          <S.TagContainer>
            <S.Tag to='#'>#넘맛탱</S.Tag>
            <S.Tag to='#'>#넘맛탱구리</S.Tag>
          </S.TagContainer>
        </S.PostReview>
      </S.PostContent>
    </S.PostCardBox>
  );
}

export default PostCard;
