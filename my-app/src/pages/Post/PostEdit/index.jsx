import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Timestamp } from 'firebase/firestore';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import Button from '../../../components/common/Button';
import PostForm from '../../../components/post/PostForm';
import useToggle from '../../../hooks/useToggle';
import Portal from '../../../components/modal/Portal';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import {
  categoryState,
  themeState,
  dateState,
  menuNameState,
  menuPriceState,
  starRatingState,
  reviewState,
  tagListState,
  imageListState,
  inputValidState,
  imageDeleteState,
} from '../../../atom/postUploadRecoil';
import placeState from '../../../atom/mapRecoil';
import usePostUpload from '../../../hooks/usePostUpload';

function PostEdit() {
  const selectCategory = useRecoilValue(categoryState);
  const selectTheme = useRecoilValue(themeState);
  const selectDate = useRecoilValue(dateState);
  const menuName = useRecoilValue(menuNameState);
  const menuPrice = useRecoilValue(menuPriceState);
  const starRating = useRecoilValue(starRatingState);
  const place = useRecoilValue(placeState);
  const myReview = useRecoilValue(reviewState);
  const tagList = useRecoilValue(tagListState);
  const imageList = useRecoilValue(imageListState);
  const inputValid = useRecoilValue(inputValidState);

  const setInputValid = useSetRecoilState(inputValidState);

  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useToggle();
  const { updatePost, response, deleteImg } = usePostUpload('post', id);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const imageDeleteList = useRecoilValue(imageDeleteState);

  useEffect(() => {
    if (
      inputValid.addressValid &&
      inputValid.dateValid &&
      inputValid.menuNameValid &&
      inputValid.menuPriceValid &&
      inputValid.ratingValid &&
      inputValid.storeValid
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [inputValid]);

  // 새로고침 막기
  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
      setInputValid({
        ...inputValid,
        menuNameValid: true,
        menuPriceValid: true,
        ratingValid: true,
        storeValid: true,
        addressValid: true,
        dateValid: true,
      });
    })();

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  const handlePostEditConfirm = () => {
    setIsConfirmModalOpen();
  };

  const confirmModalClose = () => {
    setIsConfirmModalOpen();
  };

  const handlePostEdit = (e) => {
    e.preventDefault();

    const updateDate = Timestamp.fromDate(new Date(selectDate));

    updatePost({
      category: selectCategory,
      theme: selectTheme,
      date: updateDate,
      menu: menuName,
      price: menuPrice,
      score: starRating,
      address: { latLng: [place.lat, place.lng], location: place.address },
      shop: place.store,
      review: myReview,
      tag: tagList,
      photo: imageList,
      like: state.like,
    });

    deleteImg(imageDeleteList);

    setIsConfirmModalOpen(false);
    navigate(-1);
  };

  useEffect(() => {
    if (response.error) {
      alert('커디어리 수정에 실패했습니다!');
    }
  }, [response.error]);

  return (
    <>
      <Header
        title='커디어리 수정'
        rightChild={
          <Button size='sm' text='수정' btnDisabled={btnDisabled} onClick={handlePostEditConfirm} />
        }
      />
      <PostForm edit editPost={state} />
      <Portal>
        <ConfirmModal
          visible={isConfirmModalOpen}
          msg='게시글을 등록할까요?'
          leftBtnMsg='취소'
          rightBtnMsg='등록'
          onClickClose={confirmModalClose}
          leftOnclick={confirmModalClose}
          rightOnclick={handlePostEdit}
        />
      </Portal>
      <NavBar page='upload' />
    </>
  );
}

export default PostEdit;
