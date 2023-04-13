import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style';

// import getPost from '../../hooks/getPost';

function Hashtag() {
  const [tagArr, setTagArr] = useState([]);

  console.log(setTagArr);
  console.log(tagArr);

  // useEffect(() => {
  //   getPost('ALL').then((data) => {
  //     const onlyTags = data.reduce((acc, cur) => [...acc, ...cur.tag], []);

  //     setTagArr(onlyTags);
  //   });
  // }, []);

  return (
    <>
      <Header title='태그 모아보기' />
      <S.Container>
        {tagArr.length ? (
          <S.TagBox>
            {tagArr.map((tag) => (
              <S.TagList key={uuidv4()}>
                <S.TagLink to='/hashtag/keyword'>#{tag}</S.TagLink>
              </S.TagList>
            ))}
          </S.TagBox>
        ) : (
          <>
            <S.TextContainer>
              <S.Text>
                아직 등록된 <S.TextDeco>#해시태그</S.TextDeco> 가 없어요.
              </S.Text>
              <S.Text>
                <S.TextDeco>#해시태그</S.TextDeco> 를 등록해보세요!
              </S.Text>
            </S.TextContainer>
          </>
        )}
      </S.Container>
      <NavBar />
    </>
  );
}

export default Hashtag;
