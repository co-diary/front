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
    categories: ['전체', '커피', '논커피', '스무디', '주스', '기타'],
  },
  {
    Theme: '디저트',
    categories: ['전체', '케이크', '마카롱', '베이커리', '기타'],
  },
];

function Post() {
  const userId = useRecoilValue(UserIdState);
  const options = ['최신순', '별점순', '방문순'];

  const [selectedOption, setSelectedOption] = useState('최신순');

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [sortedPostList, setSortedPostList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const ThemeTitle = location.state;

  const { isLoading, isError, data: posts } = usePost(userId, 'theme', ThemeTitle);

  const categoryContents = categoryContentsAll.filter((v) => v.Theme === ThemeTitle)[0];

  const sortPostsByOption = (post, option) => {
    const sortedPost = [...post];

    if (option === '최신순') {
      sortedPost.sort((a, b) => b.createAt.toDate() - a.createAt.toDate());
    } else if (option === '별점순') {
      sortedPost.sort((a, b) => b.score - a.score);
    } else if (option === '방문순') {
      sortedPost.sort((a, b) => b.date.toDate() - a.date.toDate());
    }
    return sortedPost;
  };

  const filterPostsByCategory = (post, category) =>
    category === '전체' ? post : post.filter((doc) => doc.category === category);

  const handleSelectedOption = useCallback(
    (option) => {
      if (option === selectedOption) {
        return;
      }
      setSelectedOption(option);
      const sortedPost = sortPostsByOption(posts, option);
      const filteredPost = filterPostsByCategory(sortedPost, selectedCategory);

      setSortedPostList(filteredPost);
    },
    [posts, selectedOption, selectedCategory],
  );

  useEffect(() => {
    if (posts && posts.length > 0) {
      const sortedPost = [...posts];

      sortedPost.sort((a, b) => b.createAt.toDate() - a.createAt.toDate());
      setSortedPostList(sortedPost);
    }
  }, [posts]);

  console.log('리액트쿼리에서', posts, ThemeTitle);

  if (isLoading) {
    return <div>🌀 Loading 🌀 </div>;
  }

  if (isError) {
    return <div>fetch data중 에러</div>;
  }

  const onClickCategory = (categoryName) => {
    setSelectedCategory(categoryName);

    const sortedPost = sortPostsByOption(
      filterPostsByCategory(posts, categoryName),
      selectedOption,
    );

    setSortedPostList(sortedPost);
  };

  const handleOptionSelected = (option) => {
    handleSelectedOption(option);

    setSelectedOption(option);
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
                <S.CategoryBtn isActive={content === selectedCategory}>{content}</S.CategoryBtn>
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
