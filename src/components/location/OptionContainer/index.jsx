import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;
  bottom: 8rem;
  right: 5rem;
  gap: 1rem;
`;

function OptionContainer({ children }) {
  return <Container>{children}</Container>;
}

export default OptionContainer;
