import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
// import { useRecoilState } from 'recoil';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconSearch from '../../assets/Icon-Search.png';
import * as S from './style';
import getPost from '../../hooks/getPost';
import PostList from '../../components/post/PostList';
import SelectBox from '../../components/post/PostList/SelectBox';
// import { optionsState } from '../../atom/selectRecoil';

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
  const options = ['최신순', '별점순'];

  const [selectedOption, setSelectedOption] = useState('최신순');

  // const [selectedOption, setSelectedOption] = useRecoilState(optionsState);
  const [postList, setPostList] = useState([]);
  const [btnStyle, setBtnStyle] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const ThemeTitle = location.state;

  const categoryContents = categoryContentsAll.filter((v) => v.Theme === ThemeTitle)[0];

  useEffect(() => {
    console.log('마운트시 상태', selectedOption);
    setBtnStyle('전체');
    getPost('theme', ThemeTitle).then((data) => {
      const postData = data;
      const sortedByRecent = [...postData].sort((a, b) => b.date.nanoseconds - a.date.nanoseconds);

      setPostList(sortedByRecent);
      handleSelectedOption(selectedOption);
    });
  }, []);

  useEffect(() => {
    handleSelectedOption(selectedOption);
  }, [postList, selectedOption]);

  const onClickCategory = (categoryName) => {
    setBtnStyle(categoryName);

    if (categoryName === '전체') {
      getPost('theme', ThemeTitle).then((data) => {
        setPostList(data);
      });
    } else {
      getPost('category', categoryName).then((data) => {
        setPostList(data);
      });
    }
  };

  const handleSelectedOption = (option) => {
    if (option === selectedOption) {
      return;
    }

    if (option === '최신순') {
      console.log('최신순실행');
      const sortedByRecent = [...postList].sort((a, b) => b.date.nanoseconds - a.date.nanoseconds);

      setPostList(sortedByRecent);
    } else if (option === '별점순') {
      console.log('별점순실행');
      const sortedByScore = [...postList].sort((a, b) => b.score - a.score);

      setPostList(sortedByScore);
    }

    setSelectedOption(option);
  };

  useEffect(() => {
    handleSelectedOption(selectedOption);
  }, [selectedOption]);

  const handleOptionSelected = (option) => {
    handleSelectedOption(option);
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
