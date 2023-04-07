import styled from 'styled-components';
import Theme from '../../../../styles/Theme';

export const CloseHandler = styled.button`
  width: 5rem;
  height: 0.4rem;
  position: absolute;
  top: 40%;
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

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.6rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${Theme.WHITE};
  padding: 1.2rem 2rem;
`;

export const BottomSheetTitle = styled.h2`
  font-size: 1.8rem;
  padding-top: 0.4rem;
`;

export const Button = styled.button`
  background-color: ${Theme.WHITE};
  width: 2.4rem;
  height: 2.4rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
