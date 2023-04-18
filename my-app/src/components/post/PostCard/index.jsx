import React from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';
import * as S from './style';

import { db } from '../../../firebase';
import IconHeartOn from '../../../assets/Icon-Heart-on.png';
import IconHeartOff from '../../../assets/Icon-Heart-off.png';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconStarOff from '../../../assets/Icon-star-off.png';
import useToggle from '../../../hooks/useToggle';

function PostCard({ id, date, like, location, menu, photo, review, score, shop, tags, postList }) {
  const slicedDate = date.toDate().toISOString().slice(5, 10).replace('-', '.');
  const scoreIndexs = [0, 1, 2, 3, 4];

  const [liked, setLiked] = useToggle(like);
  const navigate = useNavigate();

  const updatePost = async (postId, newLiked) => {
    const postDoc = doc(db, 'post', postId);
    const newField = { like: newLiked };

    await updateDoc(postDoc, newField);
  };

  const handleLikeButton = (e) => {
    setLiked(!liked);
    updatePost(id, !liked);
    e.stopPropagation();
  };

  const handleClickCard = () => {
    navigate(`/post/${id}`, {
      state: postList,
    });
  };

  return (
    <S.PostCardBox onClick={handleClickCard}>
      <S.PostCover>
        <span>{slicedDate}</span>
        {photo && <img src={photo} alt='메뉴 썸네일 사진' />}
      </S.PostCover>
      <S.PostContent>
        <S.PostInfo>
          <S.PostLike onClick={handleLikeButton}>
            {liked ? (
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
          {review && <p>{review}</p>}
          <S.TagContainer>
            {tags &&
              tags.map((tag) => (
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
