import React from 'react';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import Button from '../../../components/common/Button';
import PostForm from '../../../components/post/PostForm';

function PostUpload() {
  return (
    <>
      <Header title='오늘 작성할 커디어리' rightChild={<Button size='sm' text='등록' />} />
      <PostForm />
      <NavBar page='upload' />
    </>
  );
}

export default PostUpload;
