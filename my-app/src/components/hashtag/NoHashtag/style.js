import styled from 'styled-components';
import Theme from '../../../styles/Theme';

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
