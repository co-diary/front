import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Theme from '../../../../styles/Theme';

export const NavItemContainer = styled.li`
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 0.2rem;

    &.active img {
      content: url(${({ iconActive }) => iconActive});
    }
  }
`;

export const NavLinkContainer = styled(NavLink)`
  width: 6.2rem;
  height: 100%;
  color: ${Theme.DISABLED_BTN_FONT};
  text-decoration: none;
`;
