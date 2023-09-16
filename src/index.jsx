import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </>,
);
