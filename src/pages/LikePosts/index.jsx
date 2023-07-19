import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  collection,
  onSnapshot,
  query,
  where,
  // deleteDoc,
  // doc,
  // getDoc,
  // setDoc,
  // updateDoc,
} from 'firebase/firestore';

import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';
import { authState } from '../../atom/authRecoil';
import { db } from '../../firebase';
import PostCard from '../../components/post/PostCard';
import DefaultLikePosts from './DefaultLikePosts';
import Portal from '../../components/modal/Portal';
import ConfirmModal from '../../components/modal/ConfirmModal';
import { confirmModalState } from '../../atom/modalRecoil';
// import useLikeUpdate from '../../hooks/useLikeUpdate';

function LikePosts() {
  const user = useRecoilValue(authState);
  const likedRef = collection(db, 'liked');
  const [isLoading, setIsLoading] = useState(true);
  const [likedPostList, setLikedPostList] = useState([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useRecoilState(confirmModalState);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    if (user) {
      addLikedListener();
    }
  }, [user]);

  const addLikedListener = () => {
    const q = query(likedRef, where('uid', '==', user.uid));

    onSnapshot(q, (querySnapshot) => {
      const listArr = [];

      querySnapshot.forEach((docu) => {
        listArr.push({ ...docu.data(), key: docu.id });
      });
      listArr.sort((a, b) => b.createAt.seconds - a.createAt.seconds);

      setLikedPostList(listArr);
      setIsLoading(false);
    });
  };

  const handleModalOpen = (postId) => {
    setSelectedPostId(postId);
    console.log('값있어?', selectedPostId);
    setIsConfirmModalOpen({ ...isConfirmModalOpen, visible: !isConfirmModalOpen.visible });
  };

  const handleModalClose = () => {
    setSelectedPostId(null);
    setIsConfirmModalOpen({ ...isConfirmModalOpen, visible: false });
  };

  const handleDelete = (postId) => {
    // 삭제동작
    console.log('Post with id', postId, 'is going to be deleted.');
  };

  return (
    <>
      <Header title='좋아요' />
      {isLoading ? (
        <p style={{ marginTop: '5.2rem', fontSize: '1.8rem', color: 'blue' }}>로딩 중...임시</p>
      ) : (
        <S.Container>
          <header>
            <h1 className='ir'>좋아요 게시글 페이지</h1>
          </header>
          <S.LikedPostContainer>
            {likedPostList.length > 0 ? (
              likedPostList.map((post) => (
                <PostCard
                  key={post.key}
                  id={post.key}
                  date={post.createAt}
                  like={post.like}
                  location={post.address.location}
                  menu={post.menu}
                  photo={post.photo}
                  review={post.review}
                  score={post.score}
                  shop={post.shop}
                  tags={post.tag}
                  postList={likedPostList}
                  onLike={handleModalOpen}
                  onOpenModal={handleModalOpen}
                />
              ))
            ) : (
              <DefaultLikePosts />
            )}
          </S.LikedPostContainer>
        </S.Container>
      )}
      <NavBar />
      <Portal>
        <ConfirmModal
          visible={isConfirmModalOpen.visible}
          msg='좋아요 목록에서 삭제할까요?'
          leftBtnMsg='취소'
          rightBtnMsg='삭제'
          onClickClose={handleModalClose}
          rightOnclick={() => {
            handleDelete(selectedPostId);
            handleModalClose();
          }}
          leftOnclick={handleModalClose}
        />
      </Portal>
    </>
  );
}

export default LikePosts;
