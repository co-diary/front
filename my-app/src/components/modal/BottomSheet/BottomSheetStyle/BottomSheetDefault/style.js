import styled from 'styled-components';
import Theme from '../../../../../styles/Theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 6rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${Theme.WHITE};
  padding: 3rem 1.2rem 1rem 1.2rem;
`;

export const Contents = styled.button`
  background-color: ${Theme.WHITE};
  padding: 1.3rem 2.7rem 1.4rem 2.7rem;
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
`;

export const CloseHandler = styled.button`
  width: 5rem;
  height: 0.4rem;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  background-color: ${Theme.SHADOW_BORDER};

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2.5rem;
    margin-top: -1rem;
  }
`;
