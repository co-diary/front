import styled, { keyframes } from 'styled-components';
import Theme from '../../../styles/Theme';

const slideIn = keyframes`
  from {
    opacity: 0;
    top: 1rem;
  }
  to {
    opacity: 0.85;
    top: 14%;
  }
`;

const slideOut = keyframes`
  from {
    opacity: 0.85;
    top: 14%;
  }
  to {
    opacity: 0;
    top: 1rem;
  }
`;

export const ToastBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  top: 14%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 25.2rem;
  height: 4.6rem;
  padding: 0 4rem;
  background-color: ${Theme.MAIN_FONT};
  border-radius: 1rem;
  opacity: 0.85;

  &.toast-enter-active {
    animation: ${slideIn} 0.4s ease-in-out;
  }

  &.toast-exit-active {
    animation: ${slideOut} 0.4s ease-in-out;
  }
`;

export const ToastText = styled.span`
  padding-top: 1.5rem;
  font-family: 'LINESeedKR-Rg';
  font-size: 1.6rem;
  color: ${Theme.WHITE};
`;
