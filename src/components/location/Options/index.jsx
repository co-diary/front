import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;
  bottom: 13rem;
  right: 3rem;
  gap: 0.9rem;
`;

function Options({ children }) {
  return <Container>{children}</Container>;
}

export default Options;
