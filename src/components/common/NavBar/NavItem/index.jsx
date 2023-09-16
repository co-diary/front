import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';

function NavItem({ to, label }) {
  const location = useLocation();
  let isActive = location.pathname === to;

  if (to === '/home') {
    isActive = location.pathname === to || location.pathname === '/post';
  }

  return (
    <S.NavItemContainer>
      <S.NavLinkContainer exact='true' to={to}>
        <S.NavIcon className={`nav-${to.replace('/', '')}`} isActive={isActive}></S.NavIcon>
        <S.Label isActive={isActive}>{label}</S.Label>
      </S.NavLinkContainer>
    </S.NavItemContainer>
  );
}

export default React.memo(NavItem);
