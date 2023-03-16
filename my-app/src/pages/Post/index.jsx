import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';
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

  const categoryContents = [
    { menuName: '전체' },
    { menuName: '커피' },
    { menuName: '논커피' },
    { menuName: '주스' },
    { menuName: '기타' },
  ];

  const location = useLocation();
  const categoryTitle = location.state;

  useEffect(() => {
    getPost(categoryTitle).then((data) => setPostList(data));
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
            {categoryContents.map((content) => (
              <li>
                <S.CategoryBtn>{content.menuName}</S.CategoryBtn>
              </li>
            ))}

            {/* <li>
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
            </li> */}
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
