import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconSearch from '../../assets/Icon-Search.png';
import PostCard from '../../components/common/PostCard';
import * as S from './style';
import getPost from '../../hooks/getPost';

function Post() {
  const [currentOrder, setCurrentOrder] = useState('최신순');
  const [displayOptions, setDisplayOptions] = useState(false);
  const [postList, setPostList] = useState([]);
  const [btnStyle, setBtnStyle] = useState('');

  const categoryContents = [
    { categoryName: '전체', active: false },
    { categoryName: '커피', active: false },
    { categoryName: '논커피', active: false },
    { categoryName: '주스', active: false },
    { categoryName: '기타', active: false },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const ThemeTitle = location.state;

  const onClickCategory = (카테고리명) => {
    setBtnStyle(카테고리명);

    // 예외처리하기
    if (카테고리명 === '전체') {
      getPost('theme', ThemeTitle).then((data) => setPostList(data));
    } else {
      // 해당 카테고리명 docs 불러옴
      getPost('category', 카테고리명).then((data) => setPostList(data));
    }
  };

  useEffect(() => {
    getPost('theme', ThemeTitle).then((data) => setPostList(data));
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
        title={ThemeTitle}
        rightChild={
          <S.HeaderBtn onClick={() => navigate('/search')}>
            <img src={IconSearch} alt='검색' />
          </S.HeaderBtn>
        }
      />
      <S.Container>
        <header>
          <h1 className='ir'>{ThemeTitle} 게시글 페이지</h1>
        </header>
        <nav>
          <S.CategoryContainer>
            {categoryContents.map((content, i) => (
              <li onClick={() => onClickCategory(`${content.categoryName}`, i)} key={uuidv4()}>
                <S.CategoryBtn isActive={content.categoryName === btnStyle}>
                  {content.categoryName}
                </S.CategoryBtn>
              </li>
            ))}
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
          {postList.map((post) => (
            <PostCard
              key={post.key}
              date={post.date}
              like={post.like}
              location={post.location}
              menu={post.menu}
              photo={post.photo}
              review={post.review}
              score={post.score}
              shop={post.shop}
              tag={post.tag}
            />
          ))}
        </S.PostContainer>
      </S.Container>
      <NavBar />
    </>
  );
}

export default Post;
