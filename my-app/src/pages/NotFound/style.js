import styled from 'styled-components';
import Example from '../../assets/Icon-dessert.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  min-height: 100vh;
`;

export const Logo = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
  background-image: url(${Example});
  background-size: cover;
`;

export const Text = styled.h1`
  font-size: 2.3rem;
`;
