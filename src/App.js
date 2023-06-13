import React, { useEffect } from 'react';
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

  const [userId, setUserId] = useRecoilState(UserIdState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      setUserState(user);
      setIsAuthReady(true);

      if (user) {
        setUserId(user.uid);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  console.log('authState', userState);
  console.log(userId);

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
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
