import styled, { css } from 'styled-components';
import Theme from '../../../../styles/Theme';

export const Button = styled.button`
  font-family: 'LINESeedKR-Rg';
`;

export const ButtonContent = styled.p`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${Theme.MAIN};
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-size: 1.4rem;

  ${(props) =>
    props.active &&
    css`
      background-color: #ffa471;
    `}
`;
