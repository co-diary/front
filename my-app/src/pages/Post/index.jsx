import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';

import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconSearch from '../../assets/Icon-Search.png';
import PostCard from '../../components/common/PostCard';
import * as S from './style';

function Post() {
  const [currentOrder, setCurrentOrder] = useState('최신순');
  const [displayOptions, setDisplayOptions] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState('');

  const location = useLocation();

  console.log('state', location.state);

  useEffect(() => {
    setCategoryTitle(location.state);
    console.log(categoryTitle);
  }, []);

  const handleDisplayList = useCallback(() => {
    setDisplayOptions((prev) => !prev);
  }, []);

  const handleClickList = useCallback((e) => {
    setCurrentOrder(e.target.innerText);
    setDisplayOptions(false);
    e.stopPropagation();
  }, []);

  return (
    <>
      <Header
        title={categoryTitle}
        rightChild={
          <S.HeaderBtn>
            <img src={IconSearch} alt='검색' />
          </S.HeaderBtn>
        }
      />
      <S.Container>
        <header>
          <h1 className='ir'>{categoryTitle} 게시글 페이지</h1>
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
        <S.SelectBox onClick={handleDisplayList} options={displayOptions}>
          <button>{currentOrder}</button>
          <S.ListBox options={displayOptions}>
            <li onClick={handleClickList}>최신순</li>
            <li onClick={handleClickList}>별점순</li>
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
