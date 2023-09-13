import styled, { keyframes, css } from 'styled-components';
import Theme from '../../../../../styles/Theme';
import MyLocationIcon from '../../../../../assets/Icon-MyLocation.png';
import MyLocationLoding from '../../../../../assets/Icon-MyLocation-loding.png';

const spin = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.6rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${Theme.WHITE};
  padding: 1.2rem 2rem;
  border-bottom: 1px solid #bdbdbd;
`;

export const BottomSheetTitle = styled.h2`
  font-size: 1.8rem;
  padding-top: 0.4rem;
`;

export const CloseButton = styled.button`
  background-color: ${Theme.WHITE};
  width: 2.4rem;
  height: 2.4rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Main = styled.div`
  height: 83vh;
  padding-top: 1.6rem;

  font-size: 1.4rem;
`;

export const SearchFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5.6rem;
  grid-template-rows: 3.2rem;
  gap: 1rem;
  padding: 0 2rem;
`;

export const LocationBtnBox = styled.div`
  display: flex;
  height: 6rem;
  width: 100%;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 4rem;
  font-size: 1.4rem;
  text-align: left;

  span {
    color: ${Theme.MAIN_GRAY};
  }
`;

export const MyLocation = styled.button`
  position: relative;

  &:hover,
  &:active {
    color: ${Theme.MAIN_GRAY};
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    margin-top: -0.18rem;
    left: -2rem;
    background-image: url(${({ isLocationCheck }) =>
      isLocationCheck ? MyLocationLoding : MyLocationIcon});
    background-size: cover;
    width: 1.8rem;
    height: 1.8rem;
    animation: ${({ isLocationCheck }) =>
      isLocationCheck &&
      css`
        ${spin} 2000ms linear infinite;
      `};
  `;

export const SectionBorder = styled.div`
  border-bottom: 6px solid ${Theme.SECTION_BG};
`;
