import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { UserIdState } from '../../atom/authRecoil';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import IconSearch from '../../assets/Icon-Search.png';
import * as S from './style';
import SelectBox from '../../components/post/PostList/SelectBox';
import getPost from '../../hooks/getPost';
import NoPost from '../../components/post/NoPost';
import LoadingIndicator from '../../components/common/LoadingIndicator';

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

const PostList = React.lazy(() => import('../../components/post/PostList'));

function Post() {
  const userId = useRecoilValue(UserIdState);
  const options = ['최신순', '별점순', '방문순'];
  const [posts, setPosts] = useState([]);
  const [selectedOption, setSelectedOption] = useState('최신순');
  const [isLoading, setIsLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [sortedPostList, setSortedPostList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const ThemeTitle = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postList = await getPost(userId, 'theme', ThemeTitle);

        setPosts(postList);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
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

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1 className='ir'>{ThemeTitle} 게시글 페이지</h1>
      <Header
        title={ThemeTitle}
        handlePageBack={goBack}
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
        {isLoading ? (
          <LoadingIndicator />
        ) : sortedPostList.length > 0 ? (
          <Suspense fallback={<LoadingIndicator />}>
            <PostList postList={sortedPostList} />
          </Suspense>
        ) : (
          <NoPost />
        )}
      </S.Container>
      <NavBar />
    </>
  );
}
export default Post;
