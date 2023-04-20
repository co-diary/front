import React from 'react';
import * as S from './style';
import IconBeverage from '../../../assets/Icon-beverage.png';

export default function DefaultLikePosts() {
  return (
    <S.Container>
      <header>
        <h1 className='ir'>좋아요 게시글 페이지</h1>
      </header>
      <div>
        <img src={IconBeverage} alt='' />
      </div>
      <p>등록된 게시글이 없어요.</p>
    </S.Container>
  );
}
