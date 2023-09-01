import React, { useEffect } from 'react';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import { authState, isAuthReady, isLoggedIn, UserIdState } from './atom/authRecoil';
import Router from './routes/Router';
import { appAuth, firestore } from './firebase';
import { mobileMediaQuery, pcMediaQuery } from './styles/MediaQuery';

const Container = styled.div`
  > main {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${pcMediaQuery} {
    background-color: lightgray; // PC 화면 스타일
    padding-top: 4.8rem;
    width: 100%;
    height: 100%;
    max-width: 44rem;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8px;
  }

  @media ${mobileMediaQuery} {
    background-color: lightblue; // 모바일 화면 스타일
  }
`;

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
        <Container>
          <Router />
        </Container>
      </div>
    </QueryClientProvider>
  );
}

export default App;
