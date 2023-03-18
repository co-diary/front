import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconSearch from '../../assets/Icon-Search.png';
import PostCard from '../../components/common/PostCard';
import * as S from './style';
import getPost from '../../hooks/getPost';

const categoryContentsAll = [
  {
    Theme: '음료',
    categories: ['전체', '커피', '논커피', '주스', '기타'],
  },
  {
    Theme: '디저트',
    categories: [],
  },
];

function Post() {
  const [currentOrder, setCurrentOrder] = useState('최신순');
  const [displayOptions, setDisplayOptions] = useState(false);
  const [postList, setPostList] = useState([]);
  const [btnStyle, setBtnStyle] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const ThemeTitle = location.state;

  const categoryContents = categoryContentsAll.filter((v) => v.Theme === ThemeTitle)[0];

  const onClickCategory = (categoryName) => {
    setBtnStyle(categoryName);

    // 예외처리하기
    if (categoryName === '전체') {
      getPost('theme', ThemeTitle).then((data) => setPostList(data));
    } else {
      // 해당 categoryName docs 불러옴
      getPost('category', categoryName).then((data) => setPostList(data));
    }
  };

  useEffect(() => {
    setBtnStyle('전체');
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
            {categoryContents.categories.map((content, i) => (
              <li onClick={() => onClickCategory(`${content}`)} key={uuidv4()}>
                <S.CategoryBtn isActive={content === btnStyle}>{content}</S.CategoryBtn>
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
