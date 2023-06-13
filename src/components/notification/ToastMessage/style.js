import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const ToastBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
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
`;

export const ToastText = styled.span`
  padding-top: 1.5rem;
  font-family: 'LINESeedKR-Rg';
  font-size: 1.6rem;
  color: ${Theme.WHITE};
`;
