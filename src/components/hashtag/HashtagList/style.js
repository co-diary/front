import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const TagBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 1.2rem;
  width: 100%;
  padding: 2.6rem 0;
`;

export const TagLink = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${Theme.WHITE};
  border-radius: 3rem;
  background-color: ${Theme.SUB_ORANGE};
  text-decoration: none;
  cursor: pointer;
`;

export const TagList = styled.li`
  padding: 0.5rem 0;

  &:nth-child(even) ${TagLink} {
    background-color: ${Theme.SUB_PINK};
  }
`;
