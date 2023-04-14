import React, { useState, useEffect } from 'react';

import getPost from '../../../../hooks/getPost';
import SearchResultView from '../SearchResultView';

function SearchResultContainer({ keyword }) {
  const [data, setData] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  console.log(keyword);

  useEffect(() => {
    getPost('ALL').then((res) => {
      setData(res);
    });
  }, []);

  const filtering = (key) => data.filter((item) => item?.[key]?.includes(keyword));

  useEffect(() => {
    if (keyword) {
      const option = filtering('menu');
      const option2 = filtering('shop');
      const option3 = filtering('location');
      const option4 = filtering('review');

      const filtered = [...option, ...option2, ...option3, ...option4];

      const filteredSet = Array.from(new Set(filtered));

      setFilteredPosts(filteredSet);
    } else {
      setFilteredPosts([]);
    }
  }, [keyword]);

  console.log(filteredPosts);

  return <SearchResultView postList={filteredPosts} />;
}

export default SearchResultContainer;
