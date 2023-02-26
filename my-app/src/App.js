import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import { authState, isLoggedIn } from './atom/authRecoil';
import Router from './routes/Router';
import { appAuth, firestore } from './firebase';

function App() {
  const [userState, setUserState] = useRecoilState(authState);
  // const setAuth = useSetRecoilState(authState);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      setUserState(user);
      setIsLoggedIn(true);
    });

    return unsubscribe;
  }, []);

  console.log('authState', userState);

  useEffect(() => {
    console.log(firestore);
    const users = firestore.collection('users');

    users
      .doc('jSwWPHGDKXx2yXINq7K8')
      .get()
      .then((doc) => {
        console.log(doc.data());
        console.log(doc.id);
      });
  });

  return (
    <div className='App'>
      <Router />
    </div>
  );
}

export default App;
