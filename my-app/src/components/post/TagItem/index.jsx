import React from 'react';
import * as S from './style';

function TagItem({ tagList }) {
  return (
    <>
      <S.TagList>
        {tagList.map((tag, i) => (
          <S.Tag key={`tag-${i}`}>#{tag.content}</S.Tag>
        ))}
      </S.TagList>
    </>
  );
}

export default TagItem;
