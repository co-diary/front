import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import IconHome from '../../assets/Icon-Nav-Home-off.png';
import IconMap from '../../assets/Icon-Nav-Map-off.png';
import IconWrite from '../../assets/Icon-Nav-Write-off.png';
import IconLiked from '../../assets/Icon-Nav-Heart-off.png';
import IconMyPage from '../../assets/Icon-Nav-_Mypage-off.png';

const Container = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  background-color: ${Theme.WHITE};
  border-top: 1px solid ${Theme.BORDER};
  padding: 0 2rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    width: 6.2rem;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${Theme.DISABLED_BTN_FONT};
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 0.2rem;
  }
`;

function NavBar() {
  return (
    <Container>
      <ul>
        <li>
          <img src={IconHome} alt='' />
          <Link to={'/home'}>홈</Link>
        </li>
        <li>
          <img src={IconMap} alt='' />
          <Link to={'/map'}>지도</Link>
        </li>
        <li>
          <img src={IconWrite} alt='' />
          <Link to={'/upload'}>기록</Link>
        </li>
        <li>
          <img src={IconLiked} alt='' />
          <Link to={'/likeposts'}>좋아요</Link>
        </li>
        <li>
          <img src={IconMyPage} alt='' />
          <Link to={'/mypage'}>마이</Link>
        </li>
      </ul>
      <Link to=''></Link>
    </Container>
  );
}

export default NavBar;
