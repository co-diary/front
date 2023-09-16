import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Theme from '../../../../styles/Theme';
import Sprites from '../../../../assets/Sprites.png';

export const NavItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const NavLinkContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 6.2rem;
  height: 100%;
  text-decoration: none;
`;

export const NavIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  margin-bottom: 0.2rem;
  background: url(${Sprites});
  background-repeat: no-repeat;
  background-size: 250px 218px;

  &.nav-home {
    background-position: ${({ isActive }) => (isActive ? '-107px -155px' : '-73px -155px')};
  }

  &.nav-location {
    background-position: ${({ isActive }) => (isActive ? '-190px -5px' : '-141px -155px')};
  }

  &.nav-upload {
    background-position: ${({ isActive }) => (isActive ? '-190px -107px' : '-190px -39px')};
  }
  &.nav-likeposts {
    background-position: ${({ isActive }) => (isActive ? '-39px -155px' : '-5px -155px')};
  }
  &.nav-mypage {
    background-position: ${({ isActive }) => (isActive ? '-155px -107px' : '-155px -73px;')};
  }
`;

export const Label = styled.span`
  color: ${({ isActive }) => (isActive ? Theme.MAIN_FONT : Theme.DISABLED_FONT)};
`;
