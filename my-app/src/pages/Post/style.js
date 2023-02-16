import styled from 'styled-components';
import Theme from '../../styles/Theme';
import IconSelectOff from '../../assets/Icon-Select-off.png';

export const Container = styled.main`
  padding: 4.8rem 0 8.6rem;
`;

export const CategoryContainer = styled.ul`
  display: flex;
  gap: 1.6rem;
  padding: 2.6rem 0 2rem;
  border-bottom: 1px solid ${Theme.BORDER};
`;

export const CategoryBtn = styled.button`
  color: ${Theme.MAIN_GRAY};
  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;

  &:hover,
  &:active {
    color: ${Theme.MAIN_FONT};
  }
`;

export const SelectBox = styled.div`
  position: relative;
  width: 8rem;
  margin: 1.4rem 0 1.8rem;
  margin-left: auto;
  font-size: 1.4rem;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3.8rem;
  cursor: pointer;

  &:hover,
  &:focus-within {
    border-color: ${Theme.MAIN};
  }

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
      top: 0.6rem;
      right: 0.8rem;
      background: center / contain no-repeat;
      background-image: url(${IconSelectOff});
    }
  }
`;

export const ListBox = styled.ul`
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  border-radius: 0.8rem;
  border: 1px solid ${Theme.MAIN};

  li {
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
  }
`;

export const PostContainer = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`;

export const HeaderBtn = styled.button`
  background-color: ${Theme.WHITE};
  img {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
  }
`;
