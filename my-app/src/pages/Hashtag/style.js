import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Container = styled.div`
  padding: 4.8rem 0 6rem;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  width: 100%;
  padding: 2.6rem 0;
`;

export const Tag = styled.li`
  padding: 0.5rem 1rem;
  height: 2.7rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${Theme.WHITE};
  border-radius: 3rem;
  background-color: ${Theme.SUB_ORANGE};
`;
