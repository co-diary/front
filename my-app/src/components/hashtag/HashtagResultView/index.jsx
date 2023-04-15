import React from 'react';
import PostCard from '../../post/PostCard';
import Cards from './style';

function HashtagResultView({ postList }) {
  return (
    <Cards>
      {postList.map((post) => (
        <PostCard
          key={post.key}
          date={post.date}
          like={post.like}
          location={post.location}
          menu={post.menu}
          photo={post.photo}
          review={post.review}
          score={post.score}
          shop={post.shop}
          tags={post.tag}
        />
      ))}
    </Cards>
  );
}

export default HashtagResultView;
