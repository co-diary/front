import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import Theme from '../../styles/Theme';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.8rem;
  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;
  color: ${Theme.MAIN_GRAY};
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${Theme.BORDER};
  padding: 0.4rem 0;
  outline: none;

  &::placeholder {
    color: ${Theme.PLACEHOLDER};
  }

  ${({ inputValid, isLoginAllow, alreadyError }) =>
    borderState(inputValid, isLoginAllow, alreadyError)}
`;

function borderState(inputValid, isLoginAllow, alreadyError) {
  if (inputValid === false) {
    return css`
      border-bottom: 1px solid ${Theme.ERROR};
    `;
  } else if (isLoginAllow === false) {
    return css`
      border-bottom: 1px solid ${Theme.ERROR};
    `;
  } else if (alreadyError) {
    return css`
      border-bottom: 1px solid ${Theme.ERROR};
    `;
  }

  return css`
    &:focus {
      border-bottom: 1px solid ${Theme.MAIN};
    }
  `;
}

export const ErrorMessage = styled.p`
  position: absolute;
  top: 5.2rem;
  font-family: 'LINESeedKR-Rg';
  font-size: 1.2rem;
  color: ${Theme.ERROR};
`;

// eslint-disable-next-line react/display-name
const InputWithLabel = forwardRef(
  (
    {
      id,
      labelText,
      type,
      value,
      placeholder,
      onChange,
      onBlur,
      inputValid,
      errorMessage,
      isLoginAllow,
      alreadyError,
      alreadyErrorMessage,
    },
    ref,
  ) => (
    <InputContainer>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        inputValid={inputValid}
        alreadyError={alreadyError}
        isLoginAllow={isLoginAllow}
        maxLength='30'
        required
      />
      {!inputValid && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {alreadyErrorMessage && <ErrorMessage>{alreadyErrorMessage}</ErrorMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  ),
);

export default InputWithLabel;
