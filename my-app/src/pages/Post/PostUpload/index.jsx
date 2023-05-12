import React from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import Button from '../../../components/common/Button';
import PostForm from '../../../components/post/PostForm';
import useToggle from '../../../hooks/useToggle';
import Portal from '../../../components/modal/Portal';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import { inputValidState } from '../../../atom/postUploadRecoil';

function PostUpload() {
  const inputValid = useRecoilValue(inputValidState);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useToggle();

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
        />
      </Portal>
      <NavBar page='upload' />
    </>
  );
}

export default PostUpload;
