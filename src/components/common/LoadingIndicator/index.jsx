import React from 'react';
import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function LoadingIndicator() {
  return (
    <Container>
      <BeatLoader color='#F7DA76' />
    </Container>
  );
}

export default LoadingIndicator;
