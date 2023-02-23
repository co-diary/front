import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Theme from '../../../styles/Theme';

export const Container = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.4rem;
  flex-grow: 2;
  height: 16.4rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
  font-family: 'LINESeedKR-Bd';
  background-color: ${Theme.WHITE};
`;

export const Count = styled.p`
  position: absolute;
  text-align: right;
  width: 5rem;
  top: 1.2rem;
  right: 1.6rem;
  font-size: 1.4rem;
  color: ${Theme.MAIN_GRAY};
`;

export const ImgContainer = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryImg = styled.img`
  width: 8.6rem;
  height: 8.6rem;

  object-fit: cover;
`;

export const CategoryTitle = styled.figcaption`
  line-height: 2.118rem;
  font-size: 1.6rem;
`;
