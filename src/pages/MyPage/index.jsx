import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import * as S from './style';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import ConfirmModal from '../../components/modal/ConfirmModal';
import Portal from '../../components/modal/Portal';
import useToggle from '../../hooks/useToggle';
import Profile from '../../components/mypage/Profile';
import UserMenuButton from '../../components/mypage/UserMenuButton';

function MyPage() {
  const [isModalOpen, setIsModalOpen] = useToggle();
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser({
        displayName: currentUser.displayName,
        email: currentUser.email,
      });
    }
  }, [auth]);

  const onLogOutClick = () => {
    signOut(auth);
    navigate('/login');
  };
  const onCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleEditButtonClick = () => {
    navigate(`/profile/${user.id}/edit`);
  };

  return (
    <>
      <Header title='마이 페이지' />
      <S.Container>
        <Profile user={user} goEdit={handleEditButtonClick} />
        <S.UserMenu>
          <UserMenuButton content={'공지사항'}>
            <S.Version>v1.0.0</S.Version>
          </UserMenuButton>
          <UserMenuButton content={'문의하기'} />
          <UserMenuButton content={'고객센터/운영정책'} />
          <UserMenuButton content={'로그아웃'} onClick={setIsModalOpen} />
          <S.Deactivate>탈퇴하기</S.Deactivate>
        </S.UserMenu>
      </S.Container>
      <NavBar />
      <Portal>
        {isModalOpen ? (
          <ConfirmModal
            onClickClose={setIsModalOpen}
            visible={isModalOpen}
            msg='정말 로그아웃 하시겠습니까?'
            leftBtnMsg='취소'
            leftOnclick={onCancelClick}
            rightBtnMsg='확인'
            rightOnclick={onLogOutClick}
          />
        ) : null}
      </Portal>
    </>
  );
}

export default MyPage;
