import React from 'react';
import styled from 'styled-components';

import { useLocation } from 'react-router';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import HashtagResultContainer from '../../../components/hashtag/HashtagResultContainer';
import withPathnameWatcher from '../../../components/hocs/withPathnameWatcher';

const Container = styled.main`
  padding-top: 7.4rem;
  height: calc(100vh - 4.8rem);
`;

function HashtagResult() {
  const location = useLocation();

  const keyword = location.state.data;

  return (
    <>
      <Header title={`#${keyword}`} />
      <Container>
        <HashtagResultContainer keyword={keyword} />
      </Container>
      <NavBar />
    </>
  );
}

export default withPathnameWatcher(HashtagResult);
