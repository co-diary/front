import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';

import getPost from '../../hooks/getPost';

function Hashtag() {
  const [tagArr, setTagArr] = useState([]);

  console.log(tagArr);

  useEffect(() => {
    getPost('ALL').then((data) => {
      const onlyTags = data.reduce((acc, cur) => [...acc, ...cur.tag], []);

      setTagArr(onlyTags);
    });
  }, []);

  return (
    <>
      <Header title='태그 모아보기' />
      <S.Container>
        <S.TagBox>
          {tagArr.map((tag) => (
            <S.TagList key={uuidv4()}>
              <S.TagLink to='/hashtag/keyword'>#{tag}</S.TagLink>
            </S.TagList>
          ))}
        </S.TagBox>
      </S.Container>
      <NavBar />
    </>
  );
}

export default Hashtag;
