import React, { useState, useEffect } from 'react';
import * as S from './style';
import PostCard from '../../post/PostCard';
import getPost from '../../../hooks/getPost';

function SearchResultView({ keyword }) {
  const [data, setData] = useState([]);
  const [postList, setPostList] = useState([]);

  console.log(keyword);

  useEffect(() => {
    getPost('ALL').then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    if (keyword) {
      const filtered = data.filter((item) => item.menu.includes(keyword));

      setPostList(filtered);
    } else {
      setPostList([]);
    }
  }, [keyword]);

  console.log(postList);

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
