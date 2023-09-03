import styled, { css, keyframes } from 'styled-components';
import Theme from '../../../styles/Theme';

const SlideInAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Button = styled.button`
  font-family: 'LINESeedKR-Rg';

  &.slide-in {
    animation: ${SlideInAnimation} 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }
`;

export const ButtonContent = styled.p`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${Theme.MAIN};
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-size: 1.4rem;

  ${(props) =>
    props.active &&
    css`
      background-color: #ffa471;
    `}
`;
