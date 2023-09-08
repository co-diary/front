import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Container = styled.main`
  padding-top: 7.4rem;
  height: 100vh;
`;

export const HeaderContainer = styled.header`
  padding: 4.8rem 0 3rem;
  text-align: center;
`;

export const logoImg = styled.img`
  width: 17rem;
  height: 3.8rem;
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
