import React, { useState, useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { UserIdState } from '../../../../atom/authRecoil';
import filterPosts from '../../../../hooks/filterPosts';

import usePost from '../../../../hooks/usePost';
import SearchResultView from '../SearchResultView';

function SearchResultContainer({ keyword }) {
  const userId = useRecoilValue(UserIdState);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (keyword) {
      Promise.all([
        filterPosts(posts, 'menu', keyword),
        filterPosts(posts, 'shop', keyword),
        filterPosts(posts, 'location', keyword),
        filterPosts(posts, 'review', keyword),
      ]).then((filtered) => {
        const filteredSet = Array.from(new Set(filtered.flat()));

        setFilteredPosts(filteredSet);
      });
    } else {
      setFilteredPosts([]);
    }
  }, [keyword]);

  const memoizedPostList = useMemo(() => filteredPosts, [filteredPosts]);

  const { isLoading, isError, data: posts } = usePost(userId, 'ALL');

  if (isLoading) {
    return <div>🌀 Loading 🌀 </div>;
  }

  if (isError) {
    return <div>fetch data중 에러</div>;
  }

  return <SearchResultView postList={memoizedPostList} />;
}

export default SearchResultContainer;
