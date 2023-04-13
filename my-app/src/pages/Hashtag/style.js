import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Container = styled.div`
  padding: 4.8rem 0 6rem;
`;

export const TagBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 1.2rem;
  width: 100%;
  padding: 2.6rem 0;
`;

export const TagList = styled.li`
  padding: 0.5rem 0;
`;

export const TagLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${Theme.WHITE};
  border-radius: 3rem;
  background-color: ${Theme.SUB_ORANGE};
  text-decoration: none;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  align-items: center;
  margin-top: 50%;
`;

export const Text = styled.span`
  font-size: 1.8rem;
`;

export const TextDeco = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  font-size: 1.8rem;
  line-height: 1.8rem;
  color: ${Theme.WHITE};
  border-radius: 3rem;
  background-color: ${({ bgColor }) => Theme[bgColor] || Theme.SUB_ORANGE};
  text-decoration: none;
`;
