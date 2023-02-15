import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import IconHome from '../../assets/Icon-Nav-Home-off.png';
import IconHomeActive from '../../assets/Icon-Nav-Home-on.png';
import IconMap from '../../assets/Icon-Nav-Map-off.png';
import IconMapActive from '../../assets/Icon-Nav-Map-on.png';
import IconWrite from '../../assets/Icon-Nav-Write-off.png';
import IconWriteActive from '../../assets/Icon-Nav-Write-on.png';
import IconLiked from '../../assets/Icon-Nav-Heart-off.png';
import IconLikedActive from '../../assets/Icon-Nav-Heart-on.png';
import IconMyPage from '../../assets/Icon-Nav-_Mypage-off.png';
import IconMyPageActive from '../../assets/Icon-Nav-_Mypage-on.png';

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

function NavBar({ page }) {
  return (
    <Container>
      <ul>
        <li>
          {page === 'home' ? (
            <img src={IconHomeActive} alt='메인 페이지 바로가기' />
          ) : (
            <img src={IconHome} alt='메인 페이지 바로가기' />
          )}
          <Link to={'/home'}>홈</Link>
        </li>
        <li>
          {page === 'map' ? (
            <img src={IconMapActive} alt='지도 페이지 바로가기' />
          ) : (
            <img src={IconMap} alt='지도 페이지 바로가기' />
          )}
          <Link to={'/map'}>지도</Link>
        </li>
        <li>
          {page === 'upload' ? (
            <img src={IconWriteActive} alt='게시글 작성 페이지 바로가기' />
          ) : (
            <img src={IconWrite} alt='게시글 작성 페이지 바로가기' />
          )}

          <Link to={'/upload'}>기록</Link>
        </li>
        <li>
          {page === 'liked' ? (
            <img src={IconLikedActive} alt='좋아요 페이지 바로가기' />
          ) : (
            <img src={IconLiked} alt='좋아요 페이지 바로가기' />
          )}
          <Link to={'/likeposts'}>좋아요</Link>
        </li>
        <li>
          {page === 'myPage' ? (
            <img src={IconMyPageActive} alt='마이 페이지 바로가기' />
          ) : (
            <img src={IconMyPage} alt='마이 페이지 바로가기' />
          )}

          <Link to={'/mypage'}>내 정보</Link>
        </li>
      </ul>
      <Link to=''></Link>
    </Container>
  );
}

export default NavBar;
