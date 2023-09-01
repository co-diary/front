import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import { pcMediaQuery } from '../../../styles/MediaQuery';

export const Container = styled.main`
  padding: 7.4rem 2rem;

  @media ${pcMediaQuery} {
    padding: 7.4rem 2rem;
  }
`;

export const HeaderContainer = styled.header`
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
  gap: 3rem;
`;

export const SignUpLink = styled(Link)`
  display: block;
  margin-top: 2.2rem;
  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;
  color: ${Theme.MAIN_GRAY};
  text-align: center;
`;
