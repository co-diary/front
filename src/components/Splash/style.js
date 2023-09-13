import styled, { keyframes } from 'styled-components';

const shakeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;
const fadeOut = keyframes`
0% {
  opacity: 1;
  transform: translateY(0px);
}
100% {
  opacity: 0;
  transform: translateY(-100px);
}
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LogoImg = styled.img`
  width: 25rem;
  display: block;
  animation: ${shakeAnimation} 1s, ${fadeOut} 1.5s 1.1s;
  transform: scale(1);
  transition: all 0.4s cubic-bezier(0.8, 1.8, 0.75, 0.75);
`;
