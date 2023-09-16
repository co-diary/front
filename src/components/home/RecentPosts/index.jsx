import React, { useState, useEffect } from 'react';
import getPost from '../../../hooks/getPost';
import PostCard from '../../post/PostCard';
import * as S from './style';
import NoRecentPosts from '../NoRecentPosts';
import LoadingIndicator from '../../common/LoadingIndicator';

function RecentPosts({ userId }) {
  console.log(userId);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPost(userId, 'ORDER_BY', 'createAt', 'desc').then((data) => {
      setRecentPosts(data.slice(0, 3));
      setIsLoading(false);
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
      {isLoading ? (
        <LoadingIndicator />
      ) : recentPosts.length > 0 ? (
        <S.Cards>
          {recentPosts.map((post) => (
            <PostCard
              key={post.key}
              id={post.key}
              date={post.date}
              like={post.like}
              location={post.location}
              menu={post.menu}
              photo={post.photo[0]}
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
