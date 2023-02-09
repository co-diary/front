import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

const NavBarContaier = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  background-color: pink;
  border-top: 1px solid ${Theme.BORDER};
  padding: 0 2rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    height: 6rem;
    width: 6.2rem;
    background-color: orange;
  }
`;

function NavBar() {
  return (
    <NavBarContaier>
      <ul>
        <li>
          <Link to={'/home'}>홈</Link>
        </li>
        <li>
          <Link to={'/map'}>지도</Link>
        </li>
        <li>
          <Link to={'/upload'}>기록</Link>
        </li>
        <li>
          <Link to={'/likeposts'}>좋아요</Link>
        </li>
        <li>
          <Link to={'/mypage'}>마이</Link>
        </li>
      </ul>
      <Link to=''></Link>
    </NavBarContaier>
  );
}

export default NavBar;