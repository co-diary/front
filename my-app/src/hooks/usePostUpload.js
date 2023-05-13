import { useReducer } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useRecoilValue } from 'recoil';
import { authState } from '../atom/authRecoil';
import { db } from '../firebase';

const initState = {
  isPending: false,
  collection: null,
  success: false,
  error: null,
};

const postReducer = (state, action) => {
  switch (action.type) {
    case 'addPost':
      return {
        isPending: false,
        collection: action.payload,
        success: true,
        error: null,
      };
    case 'isPending':
      return { isPending: true, collection: null, success: false, error: null };
    case 'error':
      return {
        isPending: false,
        collection: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const usePostUpload = (database) => {
  const [response, dispatch] = useReducer(postReducer, initState);
  const userAuth = useRecoilValue(authState);

  console.log('받아온 collect', database);

  const addPost = async (payloads) => {
    dispatch({ type: 'isPending' });
    try {
      const createTime = Timestamp.fromDate(new Date());
      const userUid = userAuth?.uid;

      const docRef = await addDoc(collection(db, database), {
        ...payloads,
        createAt: createTime,
        uid: userUid,
      });

      dispatch({ type: 'addPost', payload: docRef });

      console.log('받아온 collection들', { ...payloads, createAt: createTime, uid: userUid });
    } catch (error) {
      console.log('error!', error.message);
      dispatch({ type: 'error', payload: error.message });
    }
  };

  return { addPost, response };
};

export default usePostUpload;
