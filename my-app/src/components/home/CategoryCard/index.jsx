import React from 'react';
import { useNavigate } from 'react-router';
import * as S from './style';

function CategoryCard({ Icon, title, count }) {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate('/post', {
      state: title,
    });
  };

  return (
    <S.Container
      onClick={() => {
        onClickCard();
      }}
    >
      <S.Count>{count}</S.Count>
      <S.ImgContainer>
        <S.CategoryImg src={Icon} alt='' />
        <S.CategoryTitle>{title}</S.CategoryTitle>
      </S.ImgContainer>
    </S.Container>
  );
}

export default CategoryCard;
