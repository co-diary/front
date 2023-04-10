import styled from 'styled-components';
import Theme from '../../../../styles/Theme';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-columns: 2.4rem 1fr;

  height: 4.8rem;
  padding: 0 2rem;
  z-index: 99;
  border-bottom: 1px solid ${Theme.BORDER};
`;

export const Button = styled.button`
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.6rem;
  }
`;
