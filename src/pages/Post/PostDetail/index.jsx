import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import { updateDoc, doc, onSnapshot, deleteDoc, setDoc } from 'firebase/firestore';

import { db } from '../../../firebase';
import Header from '../../../components/common/Header';
import * as S from './style';

import IconPrev from '../../../assets/Icon-detail-prev.png';
import IconPrevDisabled from '../../../assets/Icon-detail-prev-hover.png';
import IconNext from '../../../assets/Icon-detail-next.png';
import IconNextDisabled from '../../../assets/Icon-detail-next-hover.png';
import IconHeartOff from '../../../assets/Icon-Heart-off.png';
import IconHeartOn from '../../../assets/Icon-Heart-on.png';
import IconMore from '../../../assets/Icon-More.png';
import currentPost from '../../../atom/currentPostRecoil';
import { confirmModalState, bottomSheetState } from '../../../atom/modalRecoil';
import Portal from '../../../components/modal/Portal';
import BottomSheet from '../../../components/modal/BottomSheet';
import BottomSheetDefault from '../../../components/modal/BottomSheet/BottomSheetStyle/BottomSheetDefault';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import usePostUpload from '../../../hooks/usePostUpload';
import PostDetailBox from '../../../components/post/PostDetailBox';

function PostDetail() {
  const { id } = useParams();
  const postRef = doc(db, 'post', id);
  const [post, setPost] = useRecoilState(currentPost);
  const [isLiked, setIsLiked] = useState(post?.like);
  const [bottomSheet, setBottomSheet] = useRecoilState(bottomSheetState);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useRecoilState(confirmModalState);
  const navigate = useNavigate();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nexBtnDisabled, setNextBtnDisabled] = useState(false);
  const { deleteImg } = usePostUpload();

  const [userPostList, setUserPostList] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState();
  const location = useLocation();
  const categoryPostArr = location.state;

  useEffect(() => {
    addPostListener();
    getUserPostList();
  }, [id]);

  const getUserPostList = useCallback(async () => {
    if (categoryPostArr) {
      const postArr = [];

      categoryPostArr.forEach((v) => postArr.push(v.key));
      setUserPostList(postArr);
      findIndex(postArr);
    } else {
      findIndex(userPostList);
    }
  }, [id]);

  const addPostListener = useCallback(() => {
    onSnapshot(postRef, (state) => {
      const postData = state.data();

      setPost(postData);
      setIsLiked(postData?.like);
    });
  }, [id]);

  const handleLikedBtn = useCallback(async () => {
    setIsLiked((prev) => !prev);
    if (isLiked) {
      await updateDoc(postRef, {
        like: false,
      });
      await deleteDoc(doc(db, 'liked', id));
    } else {
      await updateDoc(postRef, {
        like: true,
      });
      await setDoc(doc(db, 'liked', id), {
        ...post,
        like: true,
      });
    }
  }, [isLiked]);

  const handleOpenModal = useCallback(() => {
    setBottomSheet({ ...bottomSheet, visible: true });
  }, []);

  const onClickIcon = useCallback(() => {
    setBottomSheet({ ...bottomSheet, visible: false });
  }, []);

  const onClickEdit = useCallback(() => {
    navigate(`/post/${id}/edit`, {
      state: post,
    });
    setBottomSheet({ ...bottomSheet, visible: false });
  }, [post]);

  const onClickDelete = useCallback(() => {
    setIsConfirmModalOpen({ ...isConfirmModalOpen, visible: !isConfirmModalOpen.visible });
    setBottomSheet({ ...bottomSheet, visible: false });
  }, []);

  const confirmModalClose = useCallback(() => {
    setIsConfirmModalOpen({ ...isConfirmModalOpen, visible: false });
  }, []);

  const rightOnclick = useCallback(async () => {
    await deleteDoc(doc(db, 'post', id));
    await deleteDoc(doc(db, 'liked', id));

    deleteImg(post?.photo);
    setIsConfirmModalOpen({ visible: false });
    navigate(-1);
  }, []);

  const findIndex = useCallback(
    (postArr) => {
      const postIndex = postArr.indexOf(`${id}`);

      if (postIndex === 0) {
        setPrevBtnDisabled(true);
        setNextBtnDisabled(false);
      } else if (postIndex === postArr.length - 1) {
        setNextBtnDisabled(true);
        setPrevBtnDisabled(false);
      } else {
        setPrevBtnDisabled(false);
        setNextBtnDisabled(false);
      }

      if (postIndex === 0 && postArr.length === 1) {
        setPrevBtnDisabled(true);
        setNextBtnDisabled(true);
      }

      setCurrentPostIndex(postIndex);
    },
    [id],
  );

  const handlePrevBtn = useCallback(() => {
    navigate(`/post/${userPostList[currentPostIndex - 1]}`);
  }, [userPostList, currentPostIndex]);

  const handleNextBtn = useCallback(() => {
    navigate(`/post/${userPostList[currentPostIndex + 1]}`);
  }, [userPostList, currentPostIndex]);

  return (
    <>
      {post && (
        <>
          <Header
            title={post.category}
            rightChild={
              <>
                <S.HeaderBtn onClick={handleLikedBtn}>
                  {isLiked ? (
                    <img src={IconHeartOn} alt='좋아요 활성화' />
                  ) : (
                    <img src={IconHeartOff} alt='좋아요 비활성화' />
                  )}
                </S.HeaderBtn>
                <S.HeaderBtn onClick={handleOpenModal}>
                  <img src={IconMore} alt='더보기 버튼' />
                </S.HeaderBtn>
              </>
            }
          />
          <PostDetailBox />
          <S.BtnContainer>
            <S.Btn
              onClick={handlePrevBtn}
              disabled={prevBtnDisabled}
              style={{ cursor: prevBtnDisabled ? 'auto' : 'pointer' }}
            >
              {' '}
              {prevBtnDisabled ? (
                <img src={IconPrevDisabled} alt='이전 게시글 없음' />
              ) : (
                <img src={IconPrev} alt='이전 게시글 보기' />
              )}
            </S.Btn>
            <S.Btn
              onClick={handleNextBtn}
              disabled={nexBtnDisabled}
              style={{ cursor: nexBtnDisabled ? 'auto' : 'pointer' }}
            >
              {nexBtnDisabled ? (
                <img src={IconNextDisabled} alt='다음 게시글 없음' />
              ) : (
                <img src={IconNext} alt='다음 게시글 보기' />
              )}
            </S.Btn>
          </S.BtnContainer>
          <Portal>
            <BottomSheet visible={bottomSheet.visible} onClickClose={onClickIcon}>
              <BottomSheetDefault
                onClickClose={onClickIcon}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
              />
            </BottomSheet>
            <ConfirmModal
              visible={isConfirmModalOpen.visible}
              msg='기록을 삭제할까요?'
              leftBtnMsg='취소'
              rightBtnMsg='삭제'
              onClickClose={confirmModalClose}
              rightOnclick={rightOnclick}
              leftOnclick={confirmModalClose}
            />
          </Portal>
        </>
      )}
    </>
  );
}

export default PostDetail;
