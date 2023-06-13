import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Theme from '../../styles/Theme';

import IconTag from '../../assets/Icon-tag.png';
import IconTagHover from '../../assets/Icon-tag-hover.png';
import IconSearch from '../../assets/Icon-Search.png';
import IconSearchHover from '../../assets/Icon-Search-hover.png';

export const Container = styled.main`
  height: calc(100vh - 10.8rem);
  padding-top: calc(4.8rem + 2.6rem);
  padding-bottom: calc(6rem + 2.6rem);
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  height: fit-content;
`;

export const HashLink = styled(Link)`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${IconTag});
  background-size: cover;

  &:hover {
    background-image: url(${IconTagHover});
  }
`;

export const SearchLink = styled(Link)`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${IconSearch});
  background-size: cover;

  &:hover {
    background-image: url(${IconSearchHover});
  }
`;

export const SubTitle = styled.h3`
  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  width: 18.3rem;
  font-family: 'LINESeedKR-Bd';
  font-size: 1.8rem;
  line-height: 2.6rem;
`;

export const Total = styled.div`
  position: relative;
  font-family: 'LINESeedKR-Bd';
`;

export const TotalTxt = styled.p`
  display: inline-block;
  padding: 0.4rem 1rem;
  height: 2.4rem;
  background-color: ${Theme.MAIN};
  border-radius: 3rem;
  line-height: 1.589rem;
  font-size: 1.2rem;
`;

export const Count = styled.p`
  position: absolute;
  top: calc(2.4rem + 0.8rem);
  right: 0.8rem;
  font-size: 1.6rem;
`;

export const CategoryCards = styled.div`
  display: flex;
  gap: 2.2rem;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.2rem;
`;

export const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
