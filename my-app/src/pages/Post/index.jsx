import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconSearch from '../../assets/Icon-Search.png';
import * as S from './style';
import getPost from '../../hooks/getPost';
import PostList from '../../components/post/PostList';
import SelectBox from '../../components/post/PostList/SelectBox';

const categoryContentsAll = [
  {
    Theme: '음료',
    categories: ['전체', '커피', '논커피', '주스', '기타'],
  },
  {
    Theme: '디저트',
    categories: ['전체'],
  },
];

function Post() {
  const [selected, setSelected] = useState('최신순');
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
    setSelected(e.target.innerText);
    setDisplayOptions(false);
    e.stopPropagation();
  }, []);

  const handleOnBlur = () => {
    setDisplayOptions(false);
  };

  console.log(selected);
  console.log(displayOptions);

  return (
    <>
      <h1 className='ir'>{ThemeTitle} 게시글 페이지</h1>
      <Header
        title={ThemeTitle}
        rightChild={
          <S.HeaderBtn onClick={() => navigate('/search')}>
            <img src={IconSearch} alt='검색' />
          </S.HeaderBtn>
        }
      />
      <S.Container>
        <nav>
          <S.CategoryContainer>
            {categoryContents.categories.map((content) => (
              <li onClick={() => onClickCategory(`${content}`)} key={uuidv4()}>
                <S.CategoryBtn isActive={content === btnStyle}>{content}</S.CategoryBtn>
              </li>
            ))}
          </S.CategoryContainer>
        </nav>
        <SelectBox
          onBlur={handleOnBlur}
          handleDisplayList={handleDisplayList}
          handleClickList={handleClickList}
          selected={selected}
          displayOptions={displayOptions}
        />
        <PostList postList={postList} />
      </S.Container>
      <NavBar />
    </>
  );
}

export default Post;
