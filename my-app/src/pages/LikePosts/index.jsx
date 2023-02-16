import React from 'react';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';

function LikePosts() {
  return (
    <>
      <Header title='좋아요' />
      <NavBar page='liked' />
    </>
  );
}

export default LikePosts;
