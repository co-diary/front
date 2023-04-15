import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
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

    console.log('querySnapshot:', querySnapshot);

    const results = [];

    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
    });

    return results;
  };

  useEffect(() => {
    searchInArray('post', 'tag', keyword).then((results) => {
      setSearchResult(results);
      results.forEach((doc) => {
        console.log(doc.id, '=>', doc.data);
      });
    });
  }, [keyword]);

  console.log(searchResult);

  return (
    <>
      <Header title={`#${keyword}`} />
      <S.Container>카드 컴포넌트</S.Container>
      <NavBar />
    </>
  );
}

export default HashtagResult;
