import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  collection,
  onSnapshot,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';
import { authState } from '../../atom/authRecoil';
import { db } from '../../firebase';
import PostCard from '../../components/post/PostCard';
import NoPost from '../../components/post/NoPost';
import Portal from '../../components/modal/Portal';
import ConfirmModal from '../../components/modal/ConfirmModal';
import { confirmModalState } from '../../atom/modalRecoil';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import withPathnameWatcher from '../../components/hocs/withPathnameWatcher';

function LikePosts() {
  const user = useRecoilValue(authState);
  const likedRef = collection(db, 'liked');
  const [isLoading, setIsLoading] = useState(true);
  const [likedPostList, setLikedPostList] = useState([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useRecoilState(confirmModalState);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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
    setIsConfirmModalOpen({ ...isConfirmModalOpen, visible: !isConfirmModalOpen.visible });
  };

  const handleModalClose = () => {
    setSelectedPostId(null);
    setIsConfirmModalOpen({ ...isConfirmModalOpen, visible: false });
  };

  const handleUnlike = async (postId) => {
    const postDoc = doc(db, 'post', postId);
    const newField = { like: false };

    await updateDoc(postDoc, newField);
    await deleteDoc(doc(db, 'liked', postId));
  };

  return (
    <>
      <Header title='좋아요' handlePageBack={goBack} />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <S.Container>
          <h1 className='ir'>좋아요 게시글 페이지</h1>
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
                  photo={post.photo[0]}
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
              <NoPost />
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
            handleUnlike(selectedPostId);
            handleModalClose();
          }}
          leftOnclick={handleModalClose}
        />
      </Portal>
    </>
  );
}

export default withPathnameWatcher(LikePosts);
