import { getDocs, collection, query, where } from 'firebase/firestore'; // eslint-disable-line no-unused-vars
import { firestore, db } from '../firebase'; // eslint-disable-line no-unused-vars

async function getPost() {
  console.log(db);

  const postSnapshot = await getDocs(collection(db, 'post'));

  console.log(postSnapshot);

  postSnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

export default getPost;
