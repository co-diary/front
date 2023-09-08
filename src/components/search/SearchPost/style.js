import styled from 'styled-components';
import { pcMediaQuery } from '../../../styles/MediaQuery';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  padding: 7.4rem 0;
  height: fit-content;

  @media ${pcMediaQuery} {
    height: 100vh;
  }
`;
export const logo = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
`;
