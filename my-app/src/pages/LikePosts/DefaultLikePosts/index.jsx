import React from 'react';
import * as S from './style';
import IconBeverage from '../../../assets/Icon-beverage.png';

export default function DefaultLikePosts() {
  return (
    <S.Container>
      <div>
        <img src={IconBeverage} alt='' />
      </div>
      <p>등록된 게시글이 없어요.</p>
    </S.Container>
  );
}
