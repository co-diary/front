import React, { useState, useEffect } from 'react';
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router';
import * as S from './style';

import { db } from '../../../firebase';
import IconHeartOn from '../../../assets/Icon-Heart-on.png';
import IconHeartOff from '../../../assets/Icon-Heart-off.png';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconStarOff from '../../../assets/Icon-star-off.png';
import useToggle from '../../../hooks/useToggle';
import Portal from '../../modal/Portal';
import ConfirmModal from '../../modal/ConfirmModal';

function PostCard({ id, date, like, location, menu, photo, review, score, shop, tags, postList }) {
  const scoreIndexs = [0, 1, 2, 3, 4];
  const [liked, setLiked] = useToggle(like);
  const [formattedDate, setFormattedDate] = useState();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useToggle();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const formatDate = (dateFormatted) => {
    const dateString = dateFormatted.toISOString();
    const slicedDate = dateString.slice(2, 10).replaceAll('-', '.');

    setFormattedDate(slicedDate);
  };

  useEffect(() => {
    const dateFormatted = date.toDate();

    formatDate(dateFormatted);
  }, []);

  const updatePost = async (postId, newLiked) => {
    const postDoc = doc(db, 'post', postId);
    const newField = { like: newLiked };

    await updateDoc(postDoc, newField);

    if (newLiked) {
      const postData = (await getDoc(postDoc)).data();

      await setDoc(doc(db, 'liked', id), {
        ...postData,
        like: newLiked,
      });
    } else {
      await deleteDoc(doc(db, 'liked', id));
    }
  };

  const handleLikeButton = (e) => {
    if (pathname === '/likeposts') {
      e.stopPropagation();
      setIsConfirmModalOpen();
    } else {
      setLiked(!liked);
      updatePost(id, !liked);
      e.stopPropagation();
    }
  };

  const confirmModalClose = () => {
    setIsConfirmModalOpen();
  };

  const handleClickCard = () => {
    navigate(`/post/${id}`, {
      state: postList,
    });
  };

  return (
    <>
      <S.PostCardBox onClick={handleClickCard}>
        <S.PostCover>
          <span>{formattedDate}</span>
          {photo && <img src={Array.isArray(photo) ? photo[0] : photo} alt='메뉴 썸네일 사진' />}
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
      <Portal>
        <ConfirmModal
          visible={isConfirmModalOpen}
          msg='좋아요 목록에서 삭제할까요?'
          leftBtnMsg='취소'
          rightBtnMsg='삭제'
          onClickClose={confirmModalClose}
          rightOnclick={() => updatePost(id, !liked)}
          leftOnclick={confirmModalClose}
        />
      </Portal>
    </>
  );
}

export default PostCard;
