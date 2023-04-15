import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import PostCard from '../../../components/post/PostCard';
import { firestore } from '../../../firebase';
// import filterPosts from '../../../hooks/filterPosts';
import * as S from './style';

function HashtagResult() {
  const [searchResult, setSearchResult] = useState([]);

  const location = useLocation();

  const keyword = location.state.data;

  const searchInArray = async (collection, tag, value) => {
    const querySnapshot = await firestore
      .collection(collection)
      .where(tag, 'array-contains', value)
      .get();

    const results = [];

    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
    });

    return results;
  };

  useEffect(() => {
    searchInArray('post', 'tag', keyword).then((results) => {
      const dataValues = results.map((doc) => doc.data);

      setSearchResult(dataValues);
    });
  }, [keyword]);

  console.log(searchResult);

  return (
    <>
      <Header title={`#${keyword}`} />
      <S.Container>
        <S.Cards>
          {searchResult.map((post) => (
            <PostCard
              key={post.key}
              id={post.key}
              date={post.date}
              like={post.like}
              location={post.location}
              menu={post.menu}
              photo={post.photo}
              review={post.review}
              score={post.score}
              shop={post.shop}
              tags={post.tag}
            />
          ))}
        </S.Cards>
      </S.Container>
      <NavBar />
    </>
  );
}

export default HashtagResult;
