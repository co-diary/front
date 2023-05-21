import React from 'react';
import { useLocation } from 'react-router';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import Button from '../../../components/common/Button';
import PostForm from '../../../components/post/PostForm';

function PostEdit() {
  const { state } = useLocation();

  return (
    <>
      <Header title='커디어리 수정' rightChild={<Button size='sm' text='등록' />} />
      <PostForm edit editPost={state} />
      <NavBar page='upload' />
    </>
  );
}

export default PostEdit;
