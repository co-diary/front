import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import GlobalStyle from './styles/GlobalStyle';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <AuthContextProvider>
      <GlobalStyle />
      <App />
    </AuthContextProvider>
  </>,
);
