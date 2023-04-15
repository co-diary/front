import React from 'react';
import { useLocation } from 'react-router';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import HashtagResultContainer from '../../../components/hashtag/HashtagResultContainer';
import Container from './style';

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

export default HashtagResult;
