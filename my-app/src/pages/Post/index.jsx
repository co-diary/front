import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';

import { getDoc, doc } from 'firebase/firestore/lite'; // eslint-disable-line no-unused-vars
import { collection, query, where, getDocs } from 'firebase/firestore'; // eslint-disable-line no-unused-vars
import { db, firestore } from '../../firebase'; // eslint-disable-line no-unused-vars

import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconSearch from '../../assets/Icon-Search.png';
import PostCard from '../../components/common/PostCard';
import * as S from './style';
import getPost from '../../hooks/getPost';

function Post() {
  const [currentOrder, setCurrentOrder] = useState('최신순');
  const [displayOptions, setDisplayOptions] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [postList, setPostList] = useState([]); // eslint-disable-line no-unused-vars

  useEffect(() => {
    console.log('useEffect 작동');

    getPost();
  }, []);

  const location = useLocation();

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
          <PostCard />
        </S.PostContainer>
      </S.Container>
      <NavBar />
    </>
  );
}

export default Post;
