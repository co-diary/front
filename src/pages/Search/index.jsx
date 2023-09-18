import React from 'react';
import SearchPost from '../../components/search/SearchPost';
import withPathnameWatcher from '../../components/hocs/withPathnameWatcher';

function Search() {
  return <SearchPost />;
}

export default withPathnameWatcher(Search);
