import { getDocs, query, collection, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

async function getPost(queryOption, target, option) {
  const postList = [];
  const q = query(collection(db, 'post'));

  const getData = (postSnapshot) => {
    postSnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      let data = doc.data();

      data = { ...data, ...{ key: doc.id } };

      postList.push(data);
    });
  };

  if (queryOption === 'ALL') {
    const postSnapshot = await getDocs(q);

    getData(postSnapshot);
  } else if (queryOption === 'ORDER_BY') {
    const postSnapshot = await getDocs(query(q, orderBy(target, option)));

    console.log('orderby', postSnapshot);

    getData(postSnapshot);
  } else {
    const postSnapshot = await getDocs(query(q, where(queryOption, '==', target)));

    getData(postSnapshot);
  }

  console.log(postList);
  return postList;
}

export default getPost;
