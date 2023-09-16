import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router';
import Header from '../common/Header';
import NavBar from '../common/NavBar';
// eslint-disable-next-line import/no-named-as-default
import Container from './style';

import NoHashTag from './NoHashtag';
import HashtagList from './HashtagList';
import { UserIdState } from '../../atom/authRecoil';
import usePost from '../../hooks/usePost';
import LoadingIndicator from '../common/LoadingIndicator';

function HashtagView() {
  const userId = useRecoilValue(UserIdState);
  const navigate = useNavigate();

  const { isLoading, isError, data: posts } = usePost(userId, 'ALL');

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <div>fetch data중 에러</div>;
  }

  const onlyTags = posts.reduce((acc, cur) => [...acc, ...cur.tag], []);

  const goResultPage = (contents) => {
    navigate('/hashtag/keyword', { state: { data: contents } });
  };

  return (
    <>
      <Header title='태그 모아보기' />
      <Container>
        {onlyTags.length > 0 && <HashtagList tagArr={onlyTags} goResultPage={goResultPage} />}
        {!isLoading && onlyTags.length === 0 && <NoHashTag />}
      </Container>
      <NavBar />
    </>
  );
}

export default HashtagView;
