import React from 'react';
import Cards from './style';
import PostCard from '../../../post/PostCard';

function SearchResultView({ postList }) {
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
        />
      ))}
    </Cards>
  );
}

export default SearchResultView;
