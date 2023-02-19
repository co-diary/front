import React from 'react';
import * as S from './style';

function CategoryCard({ Icon, title, count }) {
  return (
    <S.Container>
      <S.Count>{count}</S.Count>
      <S.ImgContainer>
        <S.CategoryImg src={Icon} alt='' />
        <S.CategoryTitle>{title}</S.CategoryTitle>
      </S.ImgContainer>
    </S.Container>
  );
}

export default CategoryCard;
