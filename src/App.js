import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { useLocation, useNavigate } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import { authState, isLoggedIn, UserIdState } from './atom/authRecoil';
import Router from './routes/Router';
import { appAuth, firestore } from './firebase';

function App() {
  const queryClient = new QueryClient();

  const setUserState = useSetRecoilState(authState);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  const [userId, setUserId] = useRecoilState(UserIdState);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      setUserState(user);
      setIsLoadingData(false);

      if (user) {
        setUserId(user.uid);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return unsubscribe;
  }, []);

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

  if (isLoadingData) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
