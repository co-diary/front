import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import { firestore } from '../../../firebase';
// import filterPosts from '../../../hooks/filterPosts';
import * as S from './style';

function HashtagResult() {
  // const [post, setPost] = useState([]);

  const location = useLocation();

  const keyword = location.state.data;

  const searchInArray = async (collection, tags, value) => {
    const querySnapshot = await firestore
      .collection(collection)
      .where(tags, 'array-contains', value)
      .get();

    const results = [];

    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
    });

    return results;
  };

  useEffect(() => {
    console.log(keyword);

    searchInArray('post', 'tags', keyword).then((results) => {
      console.log(results);

      console.log('Matching documents:');
      results.forEach((doc) => {
        console.log(doc.id, '=>', doc.data);
      });
    });
  }, []);

  return (
    <>
      <Header title={`#${keyword}`} />
      <S.Container>카드 컴포넌트</S.Container>
      <NavBar />
    </>
  );
}

export default HashtagResult;
