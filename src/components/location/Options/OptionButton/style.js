import styled, { css, keyframes } from 'styled-components';
import Theme from '../../../../styles/Theme';

const SlideUpAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-10%);
    opacity: 1;
  }
`;

export const Button = styled.button`
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  font-family: 'LINESeedKR-Rg';
  /* 애니메이션 효과 추가 */
  overflow: hidden;
  animation: ${SlideUpAnimation} 0.3s ease-in-out forwards;
  animation-delay: 0.2s; /* 애니메이션 지연 시간 조정 */
  opacity: 0;
`;

export const ButtonContent = styled.p`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${Theme.MAIN};

  font-size: 1.4rem;

  ${(props) =>
    props.active &&
    css`
      background-color: #ffa471;
    `}
`;
