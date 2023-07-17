import { useEffect } from 'react';
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useLikeUpdate = (postId, newLiked) => {
  useEffect(() => {
    const updatePostLiked = async () => {
      const postDoc = doc(db, 'post', postId);
      const newField = { like: newLiked };

      await updateDoc(postDoc, newField);

      if (newLiked) {
        const postData = (await getDoc(postDoc)).data();

        await setDoc(doc(db, 'liked', postId), {
          ...postData,
          like: newLiked,
        });
      } else {
        await deleteDoc(doc(db, 'liked', postId));
      }
    };

    updatePostLiked();
  }, [postId, newLiked]);
};

export default useLikeUpdate;
