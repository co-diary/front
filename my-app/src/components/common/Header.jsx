import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import IconBack from '../../assets/Icon-Back.png';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.8rem;
  background-color: pink;
  padding: 0 2rem;
  z-index: 99;
  border-bottom: 1px solid ${Theme.BORDER};

  img {
    width: 2.4rem;
    height: 2.4rem;
    background-color: red;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <img src={IconBack} alt='뒤로가기' />
    </HeaderContainer>
  );
}

export default Header;
