import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as S from './style';
import IconHeartOn from '../../../assets/Icon-Heart-on.png';
import IconHeartOff from '../../../assets/Icon-Heart-off.png';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconStarOff from '../../../assets/Icon-star-off.png';

function PostCard({ date, like, location, menu, photo, review, score, shop, tags }) {
  const slicedDate = date.toDate().toISOString().slice(5, 10).replace('-', '.');
  const scoreIndexs = [0, 1, 2, 3, 4];

  return (
    <S.PostCardBox>
      <S.PostCover>
        <span>{slicedDate}</span>
        <img src={photo} alt='메뉴 썸네일 사진' />
      </S.PostCover>
      <S.PostContent>
        <S.PostInfo>
          <S.PostLike>
            {like ? (
              <img src={IconHeartOn} alt='좋아요 표시' />
            ) : (
              <img src={IconHeartOff} alt='좋아요 표시하지 않음' />
            )}
          </S.PostLike>
          <S.StarRatingContainer>
            {scoreIndexs.map((index) =>
              score > index ? (
                <img src={IconStarOn} alt='별점' key={index} />
              ) : (
                <img src={IconStarOff} alt='체크되지 않은 별점' aria-hidden='true' key={index} />
              ),
            )}
          </S.StarRatingContainer>
          <S.MenuInfo>{menu}</S.MenuInfo>
          <S.StoreInfo>
            {shop}&nbsp;{location}
          </S.StoreInfo>
        </S.PostInfo>
        <S.PostReview>
          <p>{review}</p>
          <S.TagContainer>
            {tags.map((tag) => (
              <S.Tag to='#' key={uuidv4()}>
                #{tag}
              </S.Tag>
            ))}
          </S.TagContainer>
        </S.PostReview>
      </S.PostContent>
    </S.PostCardBox>
  );
}

export default PostCard;
