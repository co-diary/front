import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Container = styled.div`
  height: 100vh;
  padding-top: 7.4rem;
`;

export const Header = styled.header`
  padding: 3rem 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: 'LINESeedKR-Bd';
  font-size: 2.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  gap: 2.8rem;
`;

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

  &:focus {
    border-bottom: 1px solid ${Theme.MAIN};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 5.4rem;
  font-family: 'LINESeedKR-Rg';
  font-size: 1.2rem;
  color: ${Theme.ERROR};
  // display: none;
`;

export const SignUpLink = styled(Link)`
  display: block;
  margin-top: 2.2rem;
  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;
  color: ${Theme.MAIN_GRAY};
  text-align: center;
`;
