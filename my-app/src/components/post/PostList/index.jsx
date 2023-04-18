import React from 'react';
import styled from 'styled-components';
import PostCard from '../PostCard';

const Container = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`;

function PostList({ postList }) {
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
          photo={post.photo}
          review={post.review}
          score={post.score}
          shop={post.shop}
          tags={post.tag}
          postList={postList}
        />
      ))}
    </Container>
  );
}

export default PostList;
