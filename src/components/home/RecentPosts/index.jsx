import React, { useState, useEffect } from 'react';
import getPost from '../../../hooks/getPost';
import PostCard from '../../post/PostCard';
import * as S from './style';
import NoHashTag from '../../hashtag/NoHashtag';
import NoRecentPosts from '../NoRecentPosts';

function RecentPosts({ userId }) {
  console.log(userId);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getPost(userId, 'ORDER_BY', 'createAt', 'desc').then((data) => {
      setRecentPosts(data.slice(0, 3));
    });
  }, []);

  const handleLikeButton = (postId) => {
    const postIndex = recentPosts.findIndex((post) => post.key === postId);

    if (postIndex === -1) return;

    const updatedPosts = [...recentPosts];

    updatedPosts[postIndex].like = !updatedPosts[postIndex].like;

    setRecentPosts(updatedPosts);
  };

  return (
    <>
      {recentPosts.length > 0 ? (
        <S.Cards>
          {recentPosts.map((post) => (
            <PostCard
              key={post.key}
              id={post.key}
              date={post.date}
              like={post.like}
              location={post.location}
              menu={post.menu}
              photo={post.photo}
              review={post.review}
              score={post.score}
              shop={post.shop}
              tags={post.tag}
              postList={recentPosts}
              onLike={handleLikeButton}
            />
          ))}
        </S.Cards>
      ) : (
        <NoRecentPosts />
      )}
    </>
  );
}

export default RecentPosts;
