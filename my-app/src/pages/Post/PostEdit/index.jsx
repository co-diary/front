import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import Button from '../../../components/common/Button';
import PostForm from '../../../components/post/PostForm';
import useToggle from '../../../hooks/useToggle';
import Portal from '../../../components/modal/Portal';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import {
  inputValidState,
  // imageDeleteState,
} from '../../../atom/postUploadRecoil';

function PostEdit() {
  const inputValid = useRecoilValue(inputValidState);

  const setInputValid = useSetRecoilState(inputValidState);

  const { state } = useLocation();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useToggle();
  const [btnDisabled, setBtnDisabled] = useState(false);

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

    setIsConfirmModalOpen(false);
  };

  // const isInputValue =
  //   selectCategory !== '음료' ||
  //   selectTheme !== '커피' ||
  //   !!selectDate ||
  //   !!menuName ||
  //   !!menuPrice ||
  //   !!starRating ||
  //   !!place.store ||
  //   !!place.address ||
  //   !!myReview ||
  //   !!tagList.length > 0 ||
  //   !!imageList.length > 0;

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
