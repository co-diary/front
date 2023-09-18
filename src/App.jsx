import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import { authState, isLoggedIn, UserIdState } from './atom/authRecoil';
import Router from './routes/Router';
import { appAuth } from './firebase';
import { pcMediaQuery } from './styles/MediaQuery';
import Splash from './components/Splash';

function App() {
  const queryClient = new QueryClient();

  const setUserState = useSetRecoilState(authState);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  const [userId, setUserId] = useRecoilState(UserIdState);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

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

  if (isLoadingData) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Container>{showSplash ? <Splash /> : <Router />}</Container>
      </div>
    </QueryClientProvider>
  );
}

export default App;

const Container = styled.div`
  > main {
    padding-left: 2rem;
    padding-right: 2rem;
    overflow-y: auto;
  }

  @media ${pcMediaQuery} {
    width: 100%;
    height: 100%;
    max-width: 44rem;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8px;
  }
`;
