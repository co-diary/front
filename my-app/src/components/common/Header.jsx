import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import IconBack from '../../assets/Icon-Back.png';
import IconHeartOff from '../../assets/Icon-Heart-off.png';
import IconMore from '../../assets/Icon-More.png';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.8rem;
  background-color: ${Theme.WHITE};
  padding: 0 2rem;
  z-index: 99;
  border-bottom: 1px solid ${Theme.BORDER};

  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.6rem;
  }
`;

const Menu = styled.div`
  display: flex;
`;

const PageTitle = styled.div`
  font-size: 1.8rem;
  padding-top: 0.4rem;
`;

function Header() {
  return (
    <Container>
      <Menu>
        <img src={IconBack} alt='뒤로가기' />
        <PageTitle>음료</PageTitle>
      </Menu>
      <Menu>
        <img src={IconHeartOff} alt='' />
        <img src={IconMore} alt='' />
      </Menu>
    </Container>
  );
}

export default Header;
