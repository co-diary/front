import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as S from './style';

function HashtagList({ tagArr, goResultPage }) {
  return (
    <S.TagBox>
      {tagArr.map((contents) => (
        <S.TagList key={uuidv4()}>
          <S.TagLink onClick={() => goResultPage(contents)}>#{contents}</S.TagLink>
        </S.TagList>
      ))}
    </S.TagBox>
  );
}

export default HashtagList;
