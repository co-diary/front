import React from 'react';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';

function UserMenuButton({ onClick, content, children }) {
  return (
    <Container>
      <Button onClick={onClick}>{content}</Button>
      {children}
    </Container>
  );
}

export default UserMenuButton;

const Container = styled.li`
  position: relative;
  font-size: 1.4rem;
  font-family: 'LINESeedKR-Bd';
`;

const Button = styled.button`
  width: 100%;
  padding: 2rem 0 2.2rem 0;
  border-bottom: 1px solid ${Theme.SHADOW_BORDER};
  text-align: left;
`;
