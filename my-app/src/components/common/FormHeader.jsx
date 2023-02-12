import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Theme from '../../styles/Theme';
import IconBack from '../../assets/Icon-Back.png';

const Container = styled.header`
  position: sticky;
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
`;

const SButton = styled.button`
  background-color: ${Theme.WHITE};
  width: 2.4rem;
  height: 2.4rem;
  img {
    width: 100%;
    height: 100%;
    margin-right: 0.6rem;
  }
`;

const PageTitle = styled.h2`
  font-size: 1.8rem;
  padding-top: 0.4rem;
`;

const Menu = styled.div`
  display: flex;
`;

function FormHeader({ title, onClick }) {
  const navigate = useNavigate();
  const handlePageBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Menu>
        <SButton onClick={handlePageBack}>
          <img src={IconBack} alt='뒤로가기' />
        </SButton>
        <PageTitle>{title}</PageTitle>
      </Menu>
      <Button text='등록' size='sm' onClick={onClick} />
    </Container>
  );
}

export default FormHeader;
