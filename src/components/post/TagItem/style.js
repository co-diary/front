import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const TagList = styled.ul`
  display: flex;
  gap: 0.6rem;
  padding: ${({ tagBorderStyled }) =>
    tagBorderStyled
      ? `0 0 0.8rem `
      : `0
`};
  border-bottom: ${({ tagBorderStyled }) =>
    tagBorderStyled
      ? `1px solid ${Theme.BORDER}`
      : `none
`};
`;

export const Tag = styled.li`
  padding: 0.5rem 1rem;
  height: 2.7rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${Theme.WHITE};
  border-radius: 3rem;
  background-color: ${Theme.SUB_ORANGE};
  cursor: pointer;

  & + li {
    background-color: ${Theme.SUB_PINK};
  }
`;
