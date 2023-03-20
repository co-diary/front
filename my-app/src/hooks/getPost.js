import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../firebase';

async function getPost(keyOption, target) {
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

  if (keyOption === 'ALL') {
    const postSnapshot = await getDocs(q);

    getData(postSnapshot);
  } else {
    const postSnapshot = await getDocs(query(q, where(keyOption, '==', target)));

    getData(postSnapshot);
  }
  console.log(postList);
  return postList;
}

export default getPost;
