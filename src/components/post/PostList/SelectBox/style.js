import styled from 'styled-components';
import Theme from '../../../../styles/Theme';
import Sprites from '../../../../assets/Sprites.png';

export const Container = styled.div`
  position: relative;
  width: 8rem;
  margin: 1.4rem 0 1.8rem;
  margin-left: auto;
  font-size: 1.4rem;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3.8rem;
  cursor: pointer;

  border-color: ${({ selected }) => (selected ? ` ${Theme.MAIN}` : ` ${Theme.BORDER}`)};

  button {
    width: 100%;
    padding: 0.9rem 1.2rem 0.6rem;
    text-align: start;

    &::before {
      content: ' ';
      display: block;
      position: absolute;
      width: 1.6rem;
      height: 1.6rem;
      top: 0.7rem;
      right: 0.8rem;

      background: url(${Sprites});
      background-size: calc(500px / 2) calc(436px / 2);
      background-position: ${({ options }) =>
        options ? `calc(-446px / 2) calc(-299px / 2);` : `calc(-446px / 2) calc(-247px / 2);`};
    }
  }
`;

export const Options = styled.ul`
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  background-color: white;
  border-radius: 0.8rem;
  border: 1px solid ${Theme.MAIN};
  border-width: ${({ options }) => (options ? '1px' : '0')};
  max-height: ${({ options }) => (options ? 'none' : '0')};
  overflow: hidden;
  z-index: 99;
`;

export const Option = styled.li`
  margin: 0.4rem;
  padding: 0.7rem 0.8rem 0.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${Theme.MAIN};
  }

  & + li {
    margin-top: 0rem;
  }
`;
