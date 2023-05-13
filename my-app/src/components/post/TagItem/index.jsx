import React from 'react';
import * as S from './style';

function TagItem({ tagList, handleTagDelete, tagBorderStyled }) {
  return (
    <>
      <S.TagList tagBorderStyled={tagBorderStyled}>
        {tagList.map((tag, i) => (
          <S.Tag key={`tag-${i}`} onClick={() => handleTagDelete(i)}>
            #{tag}
          </S.Tag>
        ))}
      </S.TagList>
    </>
  );
}

export default TagItem;
