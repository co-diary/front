import styled, { keyframes, css } from 'styled-components';
import Theme from '../../../styles/Theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
    transform: translateY(3rem);
  }

  to{
    opacity: 0;
    transform: translateY(0rem);
  }
`;

export const modalSettings = (visible) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 99;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ visible }) =>
    visible
      ? css`
          background-color: rgba(0, 0, 0, 0.2);
        `
      : css`
          display: none;
        `}
`;

export const Box = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: ${Theme.WHITE};
  padding: 0 0 0.5rem 0;

  ${(props) => modalSettings(props.visible)};
`;
