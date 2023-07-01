import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import * as S from './style';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import Button from '../../components/common/Button';
import ConfirmModal from '../../components/modal/ConfirmModal';
import Portal from '../../components/modal/Portal';
import useToggle from '../../hooks/useToggle';

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

  return (
    <>
      <Header title='마이 페이지' />
      <S.Container>
        <S.BoxOne>
          <div>
            <S.UserName>{user?.displayName || '사용자 이름'}</S.UserName>
            <S.UserEmail>{user?.email || 'email@abc.com'}</S.UserEmail>
          </div>
          <S.ButtonContainer>
            <Button
              size='default'
              text='프로필 수정'
              onClick={() => navigate(`/profile/${user.id}/edit`)}
            />
          </S.ButtonContainer>
        </S.BoxOne>
        <S.BoxTwo>
          <S.NoticeContainer>
            <div>
              <button>공지사항</button>
            </div>
            <S.WebVersion>v.1.0.0</S.WebVersion>
          </S.NoticeContainer>
          <S.MyPageLists>
            <button>문의하기</button>
          </S.MyPageLists>
          <S.MyPageLists>
            <button>고객센터/운영정책</button>
          </S.MyPageLists>
          <S.MyPageLists>
            <button onClick={setIsModalOpen}>로그아웃</button>
          </S.MyPageLists>
          <S.Deactivate>탈퇴하기</S.Deactivate>
        </S.BoxTwo>
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
