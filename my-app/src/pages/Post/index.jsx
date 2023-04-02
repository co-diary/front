import React, { useState, useEffect } from 'react';
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
  const [selectedOption, setSelectedOption] = useState('별점순');
  const options = ['별점순', '최신순'];
  const [postList, setPostList] = useState([]);

  const [btnStyle, setBtnStyle] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const ThemeTitle = location.state;

  const categoryContents = categoryContentsAll.filter((v) => v.Theme === ThemeTitle)[0];

  useEffect(() => {
    setBtnStyle('전체');
    getPost('theme', ThemeTitle).then((data) => {
      const sortedByRecent = data.sort((a, b) => b.date.nanoseconds - a.date.nanoseconds);

      setPostList(sortedByRecent);
    });
  }, []);

  const onClickCategory = (categoryName) => {
    setBtnStyle(categoryName);

    if (categoryName === '전체') {
      getPost('theme', ThemeTitle).then((data) => {
        const sortedByRecent = data.sort((a, b) => b.date.nanoseconds - a.date.nanoseconds);

        setPostList(sortedByRecent);
      });
    } else {
      getPost('category', categoryName).then((data) => {
        const sortedByRecent = data.sort((a, b) => b.date.nanoseconds - a.date.nanoseconds);

        setPostList(sortedByRecent);
      });
    }
  };

  const handleSelectedOption = (option) => {
    console.log('판단중', option);

    if (option === '최신순') {
      const sortedByRecent = [...postList].sort((a, b) => b.date.nanoseconds - a.date.nanoseconds);

      setPostList(sortedByRecent);
    } else if (option === '별점순') {
      const sortedByScore = [...postList].sort((a, b) => b.score - a.score);

      setPostList(sortedByScore);
    }
  };

  useEffect(() => {
    handleSelectedOption(selectedOption);
  }, [selectedOption]);

  console.log(selectedOption);

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

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
          options={options}
          onOptionSelected={handleOptionSelected}
          selected={selectedOption}
        />
        <PostList postList={postList} />
      </S.Container>
      <NavBar />
    </>
  );
}

export default Post;
