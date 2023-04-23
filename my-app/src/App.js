import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import { authState, isAuthReady, isLoggedIn, UserIdState } from './atom/authRecoil';
import Router from './routes/Router';
import { appAuth, firestore } from './firebase';

function App() {
  const queryClient = new QueryClient();

  const [userState, setUserState] = useRecoilState(authState);
  // const setAuth = useSetRecoilState(authState);
  const setIsAuthReady = useSetRecoilState(isAuthReady);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);

  const [userId, setUserId] = useRecoilState(UserIdState);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      setUserState(user);
      setIsLoading(false);
      setIsAuthReady(true);
      setUserId(user.uid);
      console.log(userId);

      if (user) {
        setIsLoggedIn(true);
      }
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

  if(isLoading) {
    return <p style={{marginTop:'6.8rem', fontSize:'3rem'}}>로딩 중 임시</p>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
