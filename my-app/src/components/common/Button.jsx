import React from 'react';
import styled, { css } from 'styled-components';
import Theme from '../../styles/Theme';
// import Theme from '../../styles/Theme';

// const SButton = styled.button`
//   background-color: ${Theme.MAIN};
//   padding: 1rem 2.8rem;
//   border-radius: 3rem;
// `;

const setSize = (size) => {
  switch (size) {
    case 'lg':
      return css`
        margin-top: 0.8rem;
        padding: 1.4rem 0;
        border-radius: 4.4rem;

        &:active,
        &:hover {
          color: ${Theme.MAIN_GRAY};
          background-color: #fcd240;
        }

        &:disabled {
          color: ${Theme.DISABLED_FONT};
          background-color: #ffe58e;
        }
      `;
    case 'md':
      return css`
        width: 12rem;
        padding: 1rem 0;
        border-radius: 3rem;

        &:active,
        &:hover {
          color: ${Theme.MAIN_GRAY};
          background-color: #fcd240;
        }

        &:disabled {
          color: ${Theme.DISABLED_FONT};
          background-color: #ffe58e;
        }
      `;
    case 'ms':
      return css`
        width: 9.5rem;
        padding: 0.8rem 0;
        border-radius: 3rem;

        &:active,
        &:hover {
          color: ${Theme.MAIN_GRAY};
          background-color: #fcd240;
        }

        &:disabled {
          color: ${Theme.DISABLED_FONT};
          background-color: #ffe58e;
        }
      `;
    case 'sm':
      return css`
        width: 5.6rem;
        padding: 0.8rem 0;
        border-radius: 3rem;

        &:active,
        &:hover {
          color: ${Theme.MAIN_GRAY};
          background-color: #fcd240;
        }

        &:disabled {
          color: ${Theme.DISABLED_FONT};
          background-color: #ffe58e;
        }
      `;
    default:
      return css`
        width: 9.5rem;
        background-color: ${Theme.WHITE};
        padding: 0.8rem 0;
        border: 1px solid ${Theme.BORDER};
        border-radius: 3rem;
        font-size: 1.4rem;
        font-family: LINESeedKR-bd;

        &:active,
        &:hover {
          color: ${Theme.MAIN_GRAY};
          background-color: ${Theme.BORDER};
        }
      `;
  }
};

const SButton = styled.button`
  font-size: 1.4rem;
  font-family: LINESeedKR-bd;
  background-color: ${Theme.MAIN};
  ${({ size }) => setSize(size)};
`;

function Button({ text, size, onClick }) {
  return (
    <SButton size={size} onClick={onClick}>
      {text}
    </SButton>
  );
}

export default Button;
