import React, { useState } from 'react';
import PostCard from '../../post/PostCard';
import Cards from './style';

function HashtagResultView({ postList }) {
  const [resultPostList, setResultPostList] = useState(postList);

  const handleLikeButton = (postId) => {
    const postIndex = postList.findIndex((post) => post.key === postId);

    if (postIndex === -1) return;

    const updatedPosts = [...postList];

    updatedPosts[postIndex].like = !updatedPosts[postIndex].like;

    setResultPostList(updatedPosts);
  };

  return (
    <Cards>
      {postList.map((post) => (
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
          postList={postList}
          onLike={handleLikeButton}
        />
      ))}
    </Cards>
  );
}

export default HashtagResultView;
