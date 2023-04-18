import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import Theme from '../../../../styles/Theme';

const NavItemContainer = styled.li`
  width: 6.2rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Theme.DISABLED_BTN_FONT};

  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 0.2rem;

    &.active img {
      content: url(${({ iconActive }) => iconActive});
    }
  }
`;

const NavLinkContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

function NavItem({ to, label, icon, iconActive }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavItemContainer iconActive={iconActive}>
      <NavLinkContainer exact to={to} activeClassName='active'>
        <img className={isActive ? 'active' : ''} src={isActive ? iconActive : icon} alt={label} />
        {label}
      </NavLinkContainer>
    </NavItemContainer>
  );
}

export default NavItem;
