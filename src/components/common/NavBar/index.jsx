import React from 'react';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import IconHome from '../../../assets/Icon-Nav-Home-off.png';
import IconHomeActive from '../../../assets/Icon-Nav-Home-on.png';
import IconMap from '../../../assets/Icon-Nav-Map-off.png';
import IconMapActive from '../../../assets/Icon-Nav-Map-on.png';
import IconWrite from '../../../assets/Icon-Nav-Write-off.png';
import IconWriteActive from '../../../assets/Icon-Nav-Write-on.png';
import IconLiked from '../../../assets/Icon-Nav-Heart-off.png';
import IconLikedActive from '../../../assets/Icon-Nav-Heart-on.png';
import IconMyPage from '../../../assets/Icon-Nav-_Mypage-off.png';
import IconMyPageActive from '../../../assets/Icon-Nav-_Mypage-on.png';
import NavItem from './NavItem';

const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  height: 6rem;
  background-color: ${Theme.WHITE};
  border-top: 1px solid ${Theme.BORDER};
  padding: 0 2rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function NavBar({ page }) {
  const navItems = [
    { to: '/home', label: '홈', icon: IconHome, iconActive: IconHomeActive },
    { to: '/location', label: '지도', icon: IconMap, iconActive: IconMapActive },
    { to: '/upload', label: '기록하기', icon: IconWrite, iconActive: IconWriteActive },
    { to: '/likeposts', label: '좋아요', icon: IconLiked, iconActive: IconLikedActive },
    { to: '/mypage', label: '내 정보', icon: IconMyPage, iconActive: IconMyPageActive },
  ];

  return (
    <Container>
      <ul>
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            to={item.to}
            label={item.label}
            icon={item.icon}
            iconActive={item.iconActive}
          />
        ))}
      </ul>
    </Container>
  );
}

export default NavBar;
