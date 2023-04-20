import { getDocs, query, collection, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

async function getPost(userId, queryOption, target, option) {
  const postList = [];
  const q = query(collection(db, 'post'));

  const getData = (postSnapshot) => {
    postSnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      postList.push({ ...doc.data(), key: doc.id });
    });
  };

  // 함수를 사용하여 uid 필드와 일치하는 문서를 검색
  const queryWithUid = query(q, where('uid', '==', userId));

  if (queryOption === 'ALL') {
    const postSnapshot = await getDocs(query(queryWithUid));

    getData(postSnapshot);
  } else if (queryOption === 'ORDER_BY') {
    const postSnapshot = await getDocs(query(queryWithUid, orderBy(target, option)));

    console.log('orderby', postSnapshot);

    getData(postSnapshot);
  } else {
    const postSnapshot = await getDocs(query(queryWithUid, where(queryOption, '==', target)));

    getData(postSnapshot);
  }

  console.log('postList->', postList);
  return postList;
}

export default getPost;
