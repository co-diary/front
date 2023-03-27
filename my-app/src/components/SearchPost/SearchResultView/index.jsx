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

  const filtering = (key) => {
    const option = data.filter((item) => item[key].includes(keyword));

    return option;
  };

  useEffect(() => {
    if (keyword) {
      const option = filtering('menu');
      const option2 = filtering('shop');
      const option3 = filtering('location');
      const option4 = filtering('review');

      const filtered = [...option, ...option2, ...option3, ...option4];

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
