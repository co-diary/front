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
import getPost from '../../hooks/getPost';

const categoryContentsAll = [
  {
    Theme: '음료',
    categories: ['전체', '커피', '논커피', '주스', '기타'],
  },
  {
    Theme: '디저트',
    categories: ['전체', '케이크', '마카롱', '베이커리', '기타'],
  },
];

function Post() {
  const userId = useRecoilValue(UserIdState);
  const options = ['최신순', '별점순', '방문순'];
  const [posts, setPosts] = useState([]);
  const [selectedOption, setSelectedOption] = useState('최신순');

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [sortedPostList, setSortedPostList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const ThemeTitle = location.state;

  useEffect(() => {
    const fetchData = async () => {
      const postList = await getPost(userId, 'theme', ThemeTitle);

      setPosts(postList);
    };

    fetchData();
  }, [userId, ThemeTitle]);

  const categoryContents = categoryContentsAll.filter((v) => v.Theme === ThemeTitle)[0];

  const onClickCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filterPostsByCategory = (post, category) =>
    category === '전체' ? post : post.filter((doc) => doc.category === category);

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

  const sortAndFilterPosts = useCallback(() => {
    const filteredPosts = filterPostsByCategory(posts, selectedCategory);
    const sortedPosts = sortPostsByOption(filteredPosts, selectedOption);

    setSortedPostList(sortedPosts);
  }, [posts, selectedOption, selectedCategory]);

  // selectedOption, selectedCategory 혹은 posts 변경 시 항상 정렬과 필터링을 수행
  useEffect(() => {
    sortAndFilterPosts();
  }, [sortAndFilterPosts]);

  const handleSelectedOption = useCallback((option) => {
    setSelectedOption(option);
  }, []);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const sortedPost = [...posts];

      sortedPost.sort((a, b) => b.createAt.toDate() - a.createAt.toDate());
      setSortedPostList(sortedPost);
    }
  }, [posts]);

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
