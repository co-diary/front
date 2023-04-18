import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from '../common/Header';
import NavBar from '../common/NavBar';
import Container from './style';

import getPost from '../../hooks/getPost';
import NoHashTag from './NoHashtag';
import HashtagList from './HashtagList';

function HashtagView() {
  const [tagArr, setTagArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  console.log(setTagArr);
  console.log(tagArr);

  useEffect(() => {
    getPost('ALL').then((data) => {
      const onlyTags = data.reduce((acc, cur) => [...acc, ...cur.tag], []);

      setTagArr(onlyTags);
      setIsLoading(false);
    });
  }, []);

  console.log(isLoading);

  const goResultPage = (contents) => {
    navigate('/hashtag/keyword', { state: { data: contents } });
  };

  return (
    <>
      <Header title='태그 모아보기' />
      <Container>
        {tagArr.length > 0 && <HashtagList tagArr={tagArr} goResultPage={goResultPage} />}
        {!isLoading && tagArr.length === 0 && <NoHashTag />}
      </Container>
      <NavBar />
    </>
  );
}

export default HashtagView;