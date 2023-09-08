import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Theme from '../../styles/Theme';
import IconBack from '../../assets/Icon-Back.png';
import { mobileMediaQuery, pcMediaQuery } from '../../styles/MediaQuery';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.8rem;
  background-color: ${Theme.WHITE};
  padding: 0 2rem;
  z-index: 99;
  border-bottom: 1px solid ${Theme.BORDER};
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${pcMediaQuery} {
    width: 44rem;
  }

  @media ${mobileMediaQuery} {
    width: 100%;
  }
`;

const SButton = styled.button`
  background-color: ${Theme.WHITE};
  width: 2.4rem;
  height: 2.4rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const PageTitle = styled.h2`
  font-size: 1.8rem;
  padding-top: 0.4rem;
`;

function Header({ isHome, title, rightChild }) {
  const navigate = useNavigate();
  const handlePageBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Inner>
        <Menu>
          {isHome ? null : (
            <SButton onClick={handlePageBack}>
              <img src={IconBack} alt='뒤로가기' />
            </SButton>
          )}
          {title && <PageTitle>{title}</PageTitle>}
        </Menu>
        <Menu>{rightChild}</Menu>
      </Inner>
    </Container>
  );
}

Header.defaultProps = {
  isHome: false,
};

export default React.memo(Header);
