import React, { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router';
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
} from '../../../atom/postUploadRecoil';
import placeState from '../../../atom/mapRecoil';
import usePostUpload from '../../../hooks/usePostUpload';
import ToastMessage from '../../../components/notification/ToastMessage';

function PostUpload() {
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

  const resetCategory = useResetRecoilState(categoryState);
  const resetTheme = useResetRecoilState(themeState);
  const resetDate = useResetRecoilState(dateState);
  const resetMenuName = useResetRecoilState(menuNameState);
  const resetMenuPrice = useResetRecoilState(menuPriceState);
  const resetStarRating = useResetRecoilState(starRatingState);
  const resetPlace = useResetRecoilState(placeState);
  const resetReview = useResetRecoilState(reviewState);
  const resetTagList = useResetRecoilState(tagListState);
  const resetImageList = useResetRecoilState(imageListState);
  const resetInputValid = useResetRecoilState(inputValidState);

  const navigate = useNavigate();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useToggle();
  const { addPost, response } = usePostUpload('post');
  const [successToast, setSuccessToast] = useState(false);

  const btnDisabled =
    !inputValid.addressValid ||
    !inputValid.dateValid ||
    !inputValid.menuNameValid ||
    !inputValid.menuPriceValid ||
    !inputValid.ratingValid ||
    !inputValid.storeValid;

  const handlePostUploadConfirm = () => {
    setIsConfirmModalOpen();
  };

  const confirmModalClose = () => {
    setIsConfirmModalOpen();
  };

  const handlePostUpload = (e) => {
    e.preventDefault();

    addPost({
      category: selectCategory,
      theme: selectTheme,
      date: selectDate,
      menu: menuName,
      price: menuPrice,
      score: starRating,
      address: { latLng: [place.lat, place.lng], location: place.address },
      shop: place.store,
      review: myReview,
      tag: tagList,
      photo: imageList,
      like: false,
    });
    setIsConfirmModalOpen(false);
  };

  useEffect(() => {
    if (response.success) {
      activeToast();

      resetCategory();
      resetTheme();
      resetDate();
      resetMenuName();
      resetMenuPrice();
      resetStarRating();
      resetPlace();
      resetReview();
      resetTagList();
      resetImageList();
      resetInputValid();

      navigate('/home');
    }
  }, [response.success]);

  useEffect(() => {
    if (response.error) {
      alert('커디어리 등록에 실패했습니다!');
    }
  }, [response.error]);

  function activeToast() {
    setSuccessToast(true);
    const timer = setTimeout(() => {
      setSuccessToast(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }

  return (
    <>
      <Header
        title='오늘 작성할 커디어리'
        rightChild={
          <Button
            size='sm'
            text='등록'
            btnDisabled={btnDisabled}
            onClick={handlePostUploadConfirm}
          />
        }
      />
      <PostForm />
      <Portal>
        <ConfirmModal
          visible={isConfirmModalOpen}
          msg='게시글을 등록할까요?'
          leftBtnMsg='취소'
          rightBtnMsg='등록'
          onClickClose={confirmModalClose}
          leftOnclick={confirmModalClose}
          rightOnclick={handlePostUpload}
        />
      </Portal>
      <NavBar page='upload' />
      {successToast && <ToastMessage message={'오늘의 커디어리 등록 완료!'} />}
    </>
  );
}

export default PostUpload;
