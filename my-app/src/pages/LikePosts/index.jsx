import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';
import { authState } from '../../atom/authRecoil';
import { db } from '../../firebase';
import PostCard from '../../components/post/PostCard';
import DefaultLikePosts from './DefaultLikePosts';

function LikePosts() {
  const user = useRecoilValue(authState);
  const likedRef = collection(db, 'liked');
  const [likedPostList, setLikedPostList] = useState([]);

  useEffect(() => {
    if (user) {
      addLikedListener();
    }
  }, [user]);

  const addLikedListener = () => {
    const q = query(likedRef, where('uid', '==', user.uid));

    onSnapshot(q, (querySnapshot) => {
      const listArr = [];

      querySnapshot.forEach((doc) => {
        listArr.push({ ...doc.data(), key: doc.id });
      });
      listArr.sort((a, b) => b.createAt.seconds - a.createAt.seconds);

      setLikedPostList(listArr);
    });
  };

  console.log('likedPostList', likedPostList);

  return (
    <>
      <Header title='좋아요' />
      <S.Container>
        <header>
          <h1 className='ir'>좋아요 게시글 페이지</h1>
        </header>
        <S.LikedPostContainer>
          {likedPostList.length > 0 ? (
            likedPostList.map((post) => (
              <PostCard
                key={uuidv4()}
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
              />
            ))
          ) : (
            <DefaultLikePosts />
          )}
        </S.LikedPostContainer>
      </S.Container>
      <NavBar />
    </>
  );
}

export default LikePosts;
