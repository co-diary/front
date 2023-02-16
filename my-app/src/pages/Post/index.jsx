import React from 'react';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconSearch from '../../assets/Icon-Search.png';
import PostCard from '../../components/common/PostCard';
import * as S from './style';

function Post() {
  return (
    <>
      <Header
        title='음료props'
        rightChild={
          <S.HeaderBtn>
            <img src={IconSearch} alt='검색' />
          </S.HeaderBtn>
        }
      />
      <S.Container>
        <header>
          <h1 className='ir'>음료/props 게시글 페이지</h1>
        </header>
        <nav>
          <S.CategoryContainer>
            <li>
              <S.CategoryBtn>전체</S.CategoryBtn>
            </li>
            <li>
              <S.CategoryBtn>커피</S.CategoryBtn>
            </li>
            <li>
              <S.CategoryBtn>논커피</S.CategoryBtn>
            </li>
            <li>
              <S.CategoryBtn>주스</S.CategoryBtn>
            </li>
            <li>
              <S.CategoryBtn>기타</S.CategoryBtn>
            </li>
          </S.CategoryContainer>
        </nav>
        <S.SelectBox>
          <button>최신순</button>
          <S.ListBox >
            <li>최신순</li>
            <li>별점순</li>
          </S.ListBox>
        </S.SelectBox>
        <S.PostContainer>
          <li>
            <PostCard />
          </li>
          <li>
            <PostCard />
          </li>
          <li>
            <PostCard />
          </li>
          <li>
            <PostCard />
          </li>
          <li>
            <PostCard />
          </li>
          <li>
            <PostCard />
          </li>
        </S.PostContainer>
      </S.Container>
      <NavBar />
    </>
  );
}

export default Post;
