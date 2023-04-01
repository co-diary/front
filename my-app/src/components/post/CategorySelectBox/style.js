import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import IconSelectOn from '../../../assets/Icon-Select-on.png';
import IconSelectOff from '../../../assets/Icon-Select-off.png';

export const SelectBox = styled.div`
  position: relative;
  width: 8.8rem;
  font-size: 1.4rem;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3.8rem;
  cursor: pointer;

  &:hover {
    border-color: ${Theme.MAIN};
  }
`;

export const CurrentSelect = styled.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  text-align: start;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    top: 0.6rem;
    right: 0.8rem;
    background: center / contain no-repeat;
    background-image: ${({ options }) =>
      options ? `url(${IconSelectOn})` : `url(${IconSelectOff})`};
  }
`;

export const ListBox = styled.ul`
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  background-color: ${Theme.WHITE};
  border: 1px solid ${Theme.MAIN};
  border-radius: 0.8rem;
  border-width: ${({ options }) => (options ? '1px' : '0')};
  max-height: ${({ options }) => (options ? 'none' : '0')};
  overflow: hidden;
  z-index: 99;
`;

export const ListOption = styled.li`
  margin: 0.4rem;
  padding: 0.7rem 0.8rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    font-family: 'LINESeedKR-Bd';
    background-color: ${Theme.MAIN};
  }

  & + li {
    margin-top: 0rem;
  }
`;
