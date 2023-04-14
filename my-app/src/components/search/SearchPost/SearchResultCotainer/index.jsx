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
    (key) => Promise.resolve(data.filter((item) => item?.[key]?.includes(keyword))),
    [data, keyword],
  );

  useEffect(() => {
    if (keyword) {
      Promise.all([
        filtering('menu'),
        filtering('shop'),
        filtering('location'),
        filtering('review'),
      ]).then((filtered) => {
        const filteredSet = Array.from(new Set(filtered.flat()));

        setFilteredPosts(filteredSet);
      });
    } else {
      setFilteredPosts([]);
    }
  }, [keyword, filtering]);

  const memoizedPostList = useMemo(() => filteredPosts, [filteredPosts]);

  return <SearchResultView postList={memoizedPostList} />;
}

export default SearchResultContainer;
