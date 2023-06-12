import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
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
import useResetInput from '../../../hooks/useResetInput';

function PostUpload() {
  const selectTheme = useRecoilValue(themeState);
  const selectCategory = useRecoilValue(categoryState);
  const selectDate = useRecoilValue(dateState);
  const menuName = useRecoilValue(menuNameState);
  const menuPrice = useRecoilValue(menuPriceState);
  const starRating = useRecoilValue(starRatingState);
  const place = useRecoilValue(placeState);
  const myReview = useRecoilValue(reviewState);
  const tagList = useRecoilValue(tagListState);
  const imageList = useRecoilValue(imageListState);
  const inputValid = useRecoilValue(inputValidState);

  const pathnameNavigate = useLocation();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useToggle();
  const { addPost, response, deleteImg } = usePostUpload('post');
  const { resetInput } = useResetInput();
  const imageDeleteList = useRecoilValue(imageDeleteState);
  const [btnDisabled, setBtnDisabled] = useState(true);

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

  const handlePostUploadConfirm = () => {
    setIsConfirmModalOpen();
  };

  const confirmModalClose = () => {
    setIsConfirmModalOpen();
  };

  const isInputValue =
    selectTheme !== '음료' ||
    selectCategory !== '커피' ||
    !!selectDate ||
    !!menuName ||
    !!menuPrice ||
    !!starRating ||
    !!place.store ||
    !!place.address ||
    !!myReview ||
    !!tagList.length > 0 ||
    !!imageList.length > 0;

  useEffect(() => {
    if (!!imageDeleteList || (isInputValue && pathnameNavigate.pathname === '/upload')) {
      const path = 'upload';

      resetInput(path);
    }
  }, []);

  const handlePostUpload = (e) => {
    e.preventDefault();

    addPost({
      theme: selectTheme,
      category: selectCategory,
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

    deleteImg(imageDeleteList);

    setIsConfirmModalOpen(false);
  };

  useEffect(() => {
    if (response.success) {
      const path = 'home';
      const queryString = 'success=true';

      resetInput(path, queryString);
    }
  }, [response.success]);

  useEffect(() => {
    if (response.error) {
      alert('커디어리 등록에 실패했습니다!');
    }
  }, [response.error]);

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
    </>
  );
}

export default PostUpload;
