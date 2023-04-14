import React, { useState, useEffect, useMemo } from 'react';
import filterPosts from '../../../../hooks/filterPosts';

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

  useEffect(() => {
    if (keyword) {
      Promise.all([
        filterPosts(data, 'menu', keyword),
        filterPosts(data, 'shop', keyword),
        filterPosts(data, 'location', keyword),
        filterPosts(data, 'review', keyword),
      ]).then((filtered) => {
        const filteredSet = Array.from(new Set(filtered.flat()));

        setFilteredPosts(filteredSet);
      });
    } else {
      setFilteredPosts([]);
    }
  }, [keyword]);

  const memoizedPostList = useMemo(() => filteredPosts, [filteredPosts]);

  return <SearchResultView postList={memoizedPostList} />;
}

export default SearchResultContainer;
