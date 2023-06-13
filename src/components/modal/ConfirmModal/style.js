import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';

// const fadeAndSlideIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const fadeAndSlideOut = keyframes`
//   from {
//     opacity: 1;
//     transform: translateY(0);
//   }
//   to {
//     opacity: 0;
//     transform: translateY(20px);
//   }
// `;

export const modalSettings = (visible) => css`
  opacity: ${visible ? 1 : 0};
  z-index: ${visible ? 999 : -1};
  transition: opacity 0s, z-index 0s;
  pointer-events: ${visible ? 'auto' : 'none'};
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.4);
  ${(props) => modalSettings(props.visible)};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 25.2rem;
  height: 11rem;
  padding-top: 2.5rem;
  background-color: ${Theme.WHITE};
  border-radius: 1rem;

  ${(props) => modalSettings(props.visible)};
  z-index: 1000;
`;

export const Msg = styled.p`
  text-align: center;
  font-family: LINESeedKR-bd;
  font-size: 1.6rem;
`;

export const Btns = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${Theme.SHADOW_BORDER};
`;

export const Btn = styled.button`
  width: 50%;
  padding: 1.5rem 0 1.5rem;
  overflow: hidden;
  border-bottom-left-radius: 1rem;
  border-right: 1px solid ${Theme.SHADOW_BORDER};
  background-color: ${Theme.WHITE};
`;

export const BtnRed = styled.button`
  width: 50%;
  padding: 1.5rem 0 1.5rem;
  overflow: hidden;
  color: ${Theme.ERROR};
  border-bottom-right-radius: 1rem;
  background-color: ${Theme.WHITE};
`;
