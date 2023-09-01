import React from 'react';
import styled from 'styled-components';
import { pcMediaQuery } from '../../../styles/MediaQuery';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;
  bottom: 8rem;
  right: 3rem;
  gap: 1rem;

  /* @media ${pcMediaQuery} {
    position: relative;
    right: 1rem;
    bottom: 10rem;
  } */
`;

function Options({ children }) {
  return <Container>{children}</Container>;
}

export default Options;
