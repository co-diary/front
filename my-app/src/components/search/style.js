import styled, { keyframes } from 'styled-components';
import Theme from '../../styles/Theme';
import ClearIcon from '../../assets/Icon-CancelSearch.png';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;

  align-items: center;
  height: 4.8rem;
  background-color: ${Theme.WHITE};
  padding: 0 2rem;
  z-index: 99;
  border-bottom: 1px solid ${Theme.BORDER};
`;

export const Button = styled.button`
  background-color: ${Theme.WHITE};
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.6rem;
  }
`;

export const inputSizing = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 80%;
  }
`;

export const SearchForm = styled.form`
  flex-basis: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.2rem;
  padding: 1rem 0 1rem 1.4rem;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3.2rem;

  transition: all linear 0.4s;
  &:focus {
    /* 임시로 설정 */
    /* animation: ${inputSizing} 0.4s linear; */
    outline: none;
  }
`;

export const SearchFormContainer = styled.div`
  position: relative;
  display: flex;
`;

export const ClearBtn = styled.button`
  position: absolute;
  top: 20%;
  right: 0.6rem;
  width: 2rem;
  height: 2rem;
  background-image: url(${ClearIcon});
  background-size: cover;
`;

export const CancelBtn = styled.button`
  width: 5rem;
  color: #3d3d3d;
  padding: 1.3rem 0 1.3rem 0;
  font-size: 1.4rem;
  font-family: 'LINESeedKR-Bd';
  margin-left: 0.6rem;
`;
