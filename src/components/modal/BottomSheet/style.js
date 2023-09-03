import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';
import { pcMediaQuery } from '../../../styles/MediaQuery';

export const modalSettings = (visible) => css`
  opacity: ${visible ? 1 : 0};
  z-index: ${visible ? 999 : -1};
  transition: opacity 0s, z-index 0s;
  pointer-events: ${visible ? 'auto' : 'none'};
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.2);
  ${(props) => modalSettings(props.visible)};
`;

export const Box = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: ${Theme.WHITE};
  padding: 0 0 0.5rem 0;

  ${(props) => modalSettings(props.visible)};
  z-index: 1000;

  @media ${pcMediaQuery} {
    width: 44rem;
    margin: 0 auto;
  }
`;
