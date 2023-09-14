import React, { useState } from 'react';
import styled from 'styled-components';
import PostCard from '../PostCard';

const Container = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`;

function PostList({ postList }) {
  const [newPostList, setNewPostList] = useState(postList);

  const handleLikeButton = (postId) => {
    const postIndex = newPostList.findIndex((post) => post.key === postId);

    if (postIndex === -1) return;

    const updatedPosts = [...newPostList];

    updatedPosts[postIndex].like = !updatedPosts[postIndex].like;

    setNewPostList(updatedPosts);
  };

  return (
    <Container>
      {postList.map((post) => (
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
          postList={postList}
          onLike={handleLikeButton}
        />
      ))}
    </Container>
  );
}

export default PostList;
