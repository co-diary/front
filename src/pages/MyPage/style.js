import styled from 'styled-components';

import Theme from '../../styles/Theme';
import { pcMediaQuery } from '../../styles/MediaQuery';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 8rem;

  @media ${pcMediaQuery} {
    height: calc(100vh - 4.8rem);
  }
`;

export const UserMenu = styled.ul``;

export const Version = styled.p`
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-family: 'LINESeedKR-Bd';
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${Theme.BORDER};
`;

export const Deactivate = styled.li`
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-decoration-line: underline;
  padding-top: 1.2rem;

  cursor: pointer;
`;
