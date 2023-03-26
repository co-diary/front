import React, { useState } from 'react';
import SearchHeader from './SearchHeader';
import SearchResultView from './SearchResultView';

function SearchPost() {
  return (
    <>
      <SearchHeader />
      <SearchResultView />
    </>
  );
}

export default SearchPost;
