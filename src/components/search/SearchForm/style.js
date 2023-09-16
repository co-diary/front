import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';
import Sprites from '../../../assets/Sprites.png';

export const Container = styled.div`
  display: flex;
  align-items: center;

  z-index: 99;
`;

export const SearchFormContainer = styled.div`
  position: relative;
  display: flex;
  flex-basis: 100%;
`;

export const SearchForm = styled.form`
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  width: ${({ focus, width }) => (focus ? width : '100%')};
  transition: all 0.2s linear;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.2rem;
  line-height: 3.2rem;
  padding: 1rem 3.5rem 1rem 1.4rem;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3.2rem;
  transition: all 0.2s linear;

  /* ${({ focus }) =>
    focus
      ? css`
          animation: inputReSizing 0.3s;
        `
      : css`
          animation: inputSizing 0.3s;
        `} */

  /* @keyframes inputReSizing {
    from {
      width: 100%;
    }
    to {
      width: calc(100% - 5rem);
    }
  }
  @keyframes inputSizing {
    from {
      width: calc(100% - 5rem);
    }
    to {
      width: 100%;
    }
  } */

  &:focus {
    outline: none;
  }
`;

export const ClearBtn = styled.button`
  position: absolute;
  top: 20%;
  right: 1rem;
  transition: all 0.2s linear;
  width: 2rem;
  height: 2rem;

  background: url(${Sprites});
  background-size: 500px 436px;
  background-position: -446px -391px;
`;

export const CancelBtn = styled.button`
  position: absolute;
  right: 1rem;
  width: 5rem;
  color: #3d3d3d;
  padding: 1.3rem 0;
  font-size: 1.4rem;
  font-family: 'LINESeedKR-Bd';
  margin-left: 0.3rem;

  border: none;
  background-color: transparent;

  ${({ focus }) =>
    focus
      ? css`
          animation: buttonIn 0.25s ease-out;
        `
      : css`
          animation: buttonOut 0.25s ease-out;
        `}

  @keyframes buttonIn {
    from {
      right: -3rem;
      opacity: 0;
    }
    to {
      right: 1rem;
      opacity: 1;
    }
  }
  @keyframes buttonOut {
    from {
      right: 1rem;
      opacity: 1;
    }
    to {
      right: -3rem;
      opacity: 0;
    }
  }
`;
