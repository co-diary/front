import React from 'react';
import * as S from './style';
import PostCard from '../../../post/PostCard';

function SearchResultView({ postList }) {
  return (
    <S.Cards>
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
    </S.Cards>
  );
}

export default SearchResultView;
