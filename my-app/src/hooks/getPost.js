import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

// 재사용 가능하도록 디벨롭 예정

async function getPost() {
  const postSnapshot = await getDocs(collection(db, 'post'));
  const postList = [];

  postSnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    postList.push(doc.data());
  });

  console.log(postList);
  return postList;
}

export default getPost;
