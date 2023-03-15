import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../firebase';

// 재사용 가능하도록 디벨롭 예정

async function getPost(categoryTitle) {
  const q = query(collection(db, 'post'), where('theme', '==', categoryTitle));

  const postSnapshot = await getDocs(q);
  const postList = [];

  postSnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    let data = doc.data();

    data = { ...data, ...{ key: doc.id } };

    postList.push(data);
  });

  console.log(postList);
  return postList;
}

export default getPost;
