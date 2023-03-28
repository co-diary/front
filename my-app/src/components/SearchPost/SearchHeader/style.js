import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';
import ClearIcon from '../../../assets/Icon-CancelSearch.png';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;

  align-items: center;
  height: 4.8rem;
  background-color: ${Theme.WHITE};
  padding: 0 2rem;
  z-index: 99;
  border-bottom: 1px solid ${Theme.BORDER};
`;

export const Button = styled.button`
  background-color: ${Theme.WHITE};
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.6rem;
  }
`;

export const SearchForm = styled.form`
  flex-basis: 100%;
`;

export const SearchFormContainer = styled.div`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  width: ${({ focus }) => (focus ? 'calc(100% - 4rem)' : '100%')};
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
  right: ${({ focus }) => (focus ? '5rem' : '0.6rem')};
  transition: all 0.2s linear;
  width: 2rem;
  height: 2rem;
  background-image: url(${ClearIcon});
  background-size: cover;
`;

export const CancelBtn = styled.button`
  position: absolute;
  right: 1rem;
  width: 5rem;
  color: #3d3d3d;
  padding: 1.3rem 0 1.3rem 0;
  font-size: 1.4rem;
  font-family: 'LINESeedKR-Bd';
  margin-left: 0.6rem;

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
