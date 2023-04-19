import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { UserIdState } from '../../atom/authRecoil';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconSearch from '../../assets/Icon-Search.png';
import * as S from './style';
import PostList from '../../components/post/PostList';
import SelectBox from '../../components/post/PostList/SelectBox';
import usePost from '../../hooks/usePost';

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
  const userId = useRecoilValue(UserIdState);
  const options = ['최신순', '별점순', '방문순'];

  const [selectedOption, setSelectedOption] = useState('최신순');

  const [btnStyle, setBtnStyle] = useState('전체');
  const [sortedPostList, setSortedPostList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const ThemeTitle = location.state;

  const { isLoading, isError, data: postList } = usePost(userId, 'theme', ThemeTitle);

  console.log(postList);

  const categoryContents = categoryContentsAll.filter((v) => v.Theme === ThemeTitle)[0];

  const handleSelectedOption = useCallback(
    (option) => {
      if (option === selectedOption) {
        return;
      }
      console.log(postList);
      const sortedPost = [...postList];

      if (option === '최신순') {
        console.log(sortedPost);
        console.log('최신순');
        sortedPost.sort((a, b) => b.createAt.toDate() - a.createAt.toDate());
      } else if (option === '별점순') {
        console.log('별점순실행');
        sortedPost.sort((a, b) => b.score - a.score);
      } else if (option === '방문순') {
        sortedPost.sort((a, b) => b.date.toDate() - a.date.toDate());
      }
      setSortedPostList(sortedPost);
      setSelectedOption(option);
    },
    [postList, selectedOption],
  );

  useEffect(() => {
    if (postList && postList.length > 0) {
      const sortedPost = [...postList];

      sortedPost.sort((a, b) => b.createAt.toDate() - a.createAt.toDate());
      setSortedPostList(sortedPost);
    }
  }, [postList]);

  // useEffect(() => {
  //   // 마운트되었을 때 최신순으로 정렬된 게시글 목록을 보여줌
  //   if (postList) {
  //     const sortedPost = [...postList];

  //     sortedPost.sort((a, b) => b.createAt.toDate() - a.createAt.toDate());
  //     setSortedPostList(sortedPost);
  //   }
  // }, [postList]);

  // useEffect(() => {
  //   handleSelectedOption(selectedOption);
  // }, [postList, selectedOption]);

  // useEffect(() => {
  //   handleSelectedOption('최신순');
  // }, []);

  console.log('리액트쿼리에서', postList, ThemeTitle);

  // useEffect(() => {
  //   handleSelectedOption('최신순');
  // }, []); // 페이지가 처음 마운트될 때 실행되도록 추가한 useEffect

  if (isLoading) {
    return <div>🌀 Loading 🌀 </div>;
  }

  if (isError) {
    return <div>fetch data중 에러</div>;
  }

  const onClickCategory = (categoryName) => {
    setBtnStyle(categoryName);

    handleSelectedOption(selectedOption);
  };

  const handleOptionSelected = (option) => {
    handleSelectedOption(option);

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
        <PostList postList={sortedPostList} />
      </S.Container>
      <NavBar />
    </>
  );
}
export default Post;
