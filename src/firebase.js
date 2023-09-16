import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_API_KEY,
  authDomain: import.meta.env.VITE_API_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_API_PROJECT_ID,
  storageBucket: import.meta.env.VITE_API_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_API_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_API_APP_ID,
};

// firebaseConfig 정보로 firebase 시작
const app = firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();
const appAuth = firebase.auth();

// firebaseConfig 적용하여 firestore 인스턴스 불러오기
const db = getFirestore(app);

// firebase Storage 초기화 및 Storage 버킷 참조
const storage = getStorage(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore, appAuth, db, storage };
