import { useReducer } from 'react';
import { collection, addDoc, Timestamp, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { imageDeleteState } from '../atom/postUploadRecoil';
import { authState } from '../atom/authRecoil';
import { db, storage } from '../firebase';

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
    case 'updatePost':
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

const usePostUpload = (database, id) => {
  const [response, dispatch] = useReducer(postReducer, initState);
  const userAuth = useRecoilValue(authState);
  const setImageDeleteList = useSetRecoilState(imageDeleteState);

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
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
      console.log('error!', error.message);
    }
  };

  const updatePost = async (payloads) => {
    dispatch({ type: 'isPending' });

    try {
      const userUid = userAuth?.uid;
      const docRef = doc(db, database, id);

      await updateDoc(docRef, {
        ...payloads,
        uid: userUid,
      });

      dispatch({ type: 'updatePost', payload: docRef });
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
      console.log('error!', error.message);
    }
  };

  const deleteImg = async (imageDeleteList) => {
    console.log('삭제리스트', imageDeleteList);
    const deletePromises = imageDeleteList.map((path) => {
      const deleteRef = ref(storage, path);

      return deleteObject(deleteRef);
    });

    try {
      await Promise.all(deletePromises);
      console.log('삭제성공!');
      setImageDeleteList([]);
    } catch (error) {
      console.log('[ErrorMsg]', error);
    }
  };

  return { addPost, response, deleteImg, updatePost };
};

export default usePostUpload;
