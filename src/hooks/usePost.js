import { useQuery } from 'react-query';
import { getDocs, query, collection, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export async function fetchPost(userId, queryOption, target, option) {
  const q = query(collection(db, 'post'));
  const queryWithUid = query(q, where('uid', '==', userId));

  if (queryOption === 'ALL') {
    const postSnapshot = await getDocs(query(queryWithUid));
    const postList = postSnapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id }));

    return postList;
  } else if (queryOption === 'ORDER_BY') {
    const postSnapshot = await getDocs(query(queryWithUid, orderBy(target, option)));
    const postList = postSnapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id }));

    return postList;
  } else {
    const postSnapshot = await getDocs(query(queryWithUid, where(queryOption, '==', target)));
    const postList = postSnapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id }));

    return postList;
  }
}

function usePost(userId, queryOption, target, option) {
  return useQuery(['post', userId, queryOption, target, option], () =>
    fetchPost(userId, queryOption, target, option),
  );
}

export default usePost;
