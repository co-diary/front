import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';

function NavItem({ to, label, icon, iconActive }) {
  const location = useLocation();
  let isActive = location.pathname === to;

  if (to === '/home') {
    isActive = location.pathname === to || location.pathname === '/post';
  }

  return (
    <S.NavItemContainer iconActive={iconActive}>
      <S.NavLinkContainer exact='true' to={to} activeclassname='active'>
        <img className={isActive ? 'active' : ''} src={isActive ? iconActive : icon} alt={label} />
        {label}
      </S.NavLinkContainer>
    </S.NavItemContainer>
  );
}

export default NavItem;
