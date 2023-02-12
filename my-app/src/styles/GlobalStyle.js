import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Theme from './Theme';

const GlobalStyle = createGlobalStyle`

${reset}

@font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'LINESeedKR-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'LINESeedKR-Th';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Th.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }

:root {
    font-size: 10px;
}

* {
  font-family: LINESeedKR-Rg;
  box-sizing: border-box;
  color: ${Theme.MAIN_FONT};

}
body {
  overflow-x: hidden;
  padding: 0 2rem;

}

button {
  padding: 0;
  border : none;
  cursor : pointer;
}

a{
  text-decoration:none;
  cursor: pointer;
  color:inherit;
}

img {
  vertical-align: top;
}

li {
  list-style: none;
}

.ir {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  padding: 0;
  border: 0;
}

`;

export default GlobalStyle;
