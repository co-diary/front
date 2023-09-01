import styled from 'styled-components';
import Theme from '../../../../styles/Theme';
import { mobileMediaQuery, pcMediaQuery } from '../../../../styles/MediaQuery';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-bottom: 1px solid ${Theme.BORDER};
  background-color: ${Theme.WHITE};
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 2.4rem 1fr;
  height: 4.8rem;
  padding: 0 2rem;

  @media ${pcMediaQuery} {
    width: 44rem;
    margin: 0 auto;
  }

  @media ${mobileMediaQuery} {
    width: 100%;
  }
`;

export const Button = styled.button`
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.6rem;
  }
`;
