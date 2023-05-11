import React from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import Button from '../../../components/common/Button';
import PostForm from '../../../components/post/PostForm';
import { inputValidState } from '../../../atom/postUploadRecoil';

function PostUpload() {
  const inputValid = useRecoilValue(inputValidState);

  const btnDisabled =
    !inputValid.addressValid ||
    !inputValid.dateValid ||
    !inputValid.menuNameValid ||
    !inputValid.menuPriceValid ||
    !inputValid.ratingValid ||
    !inputValid.storeValid;

  return (
    <>
      <Header
        title='오늘 작성할 커디어리'
        rightChild={<Button size='sm' text='등록' btnDisabled={btnDisabled} />}
      />
      <PostForm />
      <NavBar page='upload' />
    </>
  );
}

export default PostUpload;
