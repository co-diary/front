import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router';
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import * as S from './style';
import IconHeartOn from '../../../assets/Icon-Heart-on.png';
import IconHeartOff from '../../../assets/Icon-Heart-off.png';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconStarOff from '../../../assets/Icon-star-off.png';
import Thumbnail from './Thumbnail';

function PostCard({
  id,
  date,
  like,
  location,
  menu,
  photo,
  review,
  score,
  shop,
  tags,
  postList,
  onLike,
  onOpenModal,
}) {
  const scoreIndexs = [0, 1, 2, 3, 4];
  const [formattedDate, setFormattedDate] = useState();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const formatDate = (dateFormatted) => {
    const dateString = dateFormatted.toISOString();
    const slicedDate = dateString.slice(2, 10).replaceAll('-', '.');

    setFormattedDate(slicedDate);
  };

  useEffect(() => {
    const dateFormatted = date.toDate();

    formatDate(dateFormatted);
  }, []);

  const updatePostLiked = async (postId, newLiked) => {
    const postDoc = doc(db, 'post', postId);
    const newField = { like: newLiked };

    await updateDoc(postDoc, newField);

    if (newLiked) {
      const postData = (await getDoc(postDoc)).data();

      await setDoc(doc(db, 'liked', postId), {
        ...postData,
        like: newLiked,
      });
    } else {
      await deleteDoc(doc(db, 'liked', postId));
    }
  };

  const handleClickCard = () => {
    navigate(`/post/${id}`, {
      state: postList,
    });
  };

  const handleLike = (e) => {
    e.stopPropagation();
    if (pathname === '/likeposts') {
      onOpenModal(id);
      return;
    }
    onLike(id);
    const newLiked = !like;

    updatePostLiked(id, newLiked);
  };

  return (
    <>
      <S.PostCardBox onClick={handleClickCard}>
        <S.PostCover>
          <span>{formattedDate}</span>
          {photo ? <S.PostImg src={photo} alt='메뉴 썸네일 사진' /> : <Thumbnail />}
        </S.PostCover>
        <S.PostContent>
          <S.PostInfo>
            <S.PostLike onClick={handleLike}>
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
    </>
  );
}

export default PostCard;
