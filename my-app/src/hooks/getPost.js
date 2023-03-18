import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../firebase';

// 재사용 가능하도록 디벨롭 예정

async function getPost(keyOption, target) {
  const postList = [];

  const getData = (postSnapshot) => {
    postSnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      let data = doc.data();

      data = { ...data, ...{ key: doc.id } };

      postList.push(data);
    });
  };

  if (keyOption === 'ALL') {
    const q = query(collection(db, 'post'));
    const postSnapshot = await getDocs(q);

    getData(postSnapshot);
    console.log(postList);
    return postList;
  } else {
    const q = query(collection(db, 'post'), where(keyOption, '==', target));
    const postSnapshot = await getDocs(q);

    getData(postSnapshot);
    console.log(postList);
    return postList;
  }
}

export default getPost;
