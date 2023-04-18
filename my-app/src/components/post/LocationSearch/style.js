import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const ResultSection = styled.div`
  padding-top: 2rem;
`;

export const SectionTitle = styled.div`
  font-family: 'LINESeedKR-Bd';
  padding-left: 2rem;
`;

export const ResultBox = styled.div`
  max-height: calc(83vh - 16rem);
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Results = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  max-height: calc(83vh - 9.6rem);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Result = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.2rem 2rem;
  border-bottom: 1px solid #dbdbdb;

  line-height: 1.8rem;
  cursor: pointer;

  transition: 0.2s ease-out all;

  &:nth-last-child(1) {
    border: 1px solid ${Theme.WHITE};
  }

  &:hover {
    border-bottom: 1px solid ${Theme.MAIN_GRAY};
  }
`;

export const ResultTitle = styled.span``;

export const ResultDetail = styled.span`
  font-size: 1.2rem;
  color: #767676;
`;
