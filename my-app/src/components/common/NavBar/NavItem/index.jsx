import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';

function NavItem({ to, label, icon, iconActive }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <S.NavItemContainer iconActive={iconActive}>
      <S.NavLinkContainer exact to={to} activeClassName='active'>
        <img className={isActive ? 'active' : ''} src={isActive ? iconActive : icon} alt={label} />
        {label}
      </S.NavLinkContainer>
    </S.NavItemContainer>
  );
}

export default NavItem;
