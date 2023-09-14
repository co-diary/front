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
    <S.NavLinkContainer>
      <S.NavItemContainer exact='true' to={to}>
        <S.NavIcon className={`nav-${to.replace('/', '')}`} isActive={isActive} />
        {label}
      </S.NavItemContainer>
    </S.NavLinkContainer>
  );
}

export default React.memo(NavItem);
