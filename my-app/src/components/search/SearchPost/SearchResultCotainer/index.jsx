import React, { useState, useEffect, useCallback, useMemo } from 'react';

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

  const filtering = useCallback(
    (key) => data.filter((item) => item?.[key]?.includes(keyword)),
    [data, keyword],
  );

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
  }, [keyword, filtering]);

  const memoizedPostList = useMemo(() => filteredPosts, [filteredPosts]);

  return <SearchResultView postList={memoizedPostList} />;
}

export default SearchResultContainer;
