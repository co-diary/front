import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import * as S from './style';
import Button from '../../../components/common/Button';
import Header from '../../../components/common/Header';
import InputWithLabel from '../../../components/common/InputWithLabel';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import Portal from '../../../components/modal/Portal';
import useToggle from '../../../hooks/useToggle';

function ProfileEdit() {
  const [isModalOpen, setIsModalOpen] = useToggle(false);
  const [profile, setProfile] = useState({
    email: '',
    displayName: '',
  });

  const [emailError, setEmailError] = useState('');
  const [displayNameError, setDisplayNameError] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isDisplayNameValid, setIsDisplayNameValid] = useState(null);

  const [btnDisabled, setBtnDisabled] = useState(true);

  const navigate = useNavigate();

  // 페이지 로드 시 로그인되어 있는 유저의 이메일과 닉네임이 input 창에 나타남
  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setProfile({ email: currentUser.email, displayName: currentUser.displayName });
    }
  }, []);

  // 이메일과 닉네임 항목의 모든 유효성 검사를 통과했을 때 저장버튼 활성화
  useEffect(() => {
    if (isEmailValid && isDisplayNameValid) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [isEmailValid, isDisplayNameValid]);

  // 이메일 유효성검사
  const handleEmailChange = useCallback((e) => {
    const email = e.target.value;

    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{2,3}$/;

    if (!emailRegExp.test(email)) {
      setIsEmailValid(false);
      setEmailError('이메일 형식이 올바르지 않습니다.');
    } else {
      setIsEmailValid(true);
      setEmailError(null);
    }
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  }, []);

  // 닉네임 유효성검사
  const handleNicknameChange = useCallback((e) => {
    const displayName = e.target.value;

    const nicknameRegExp = /^(?=.*[a-zA-Z가-힣])[a-zA-Z가-힣]{2,6}$/;

    if (!nicknameRegExp.test(displayName)) {
      setIsDisplayNameValid(false);
      setDisplayNameError('2~6자 한글 또는 영문을 사용하세요.');
    } else {
      setIsDisplayNameValid(true);
      setDisplayNameError(null);
    }

    setProfile((prevProfile) => ({ ...prevProfile, displayName }));
  }, []);

  // 저장버튼을 누르면 컨펌 모달이 활성화
  const onSaveClick = useCallback(
    (e) => {
      console.log(profile);
      // 여기까지 ㅇㅋ

      e.preventDefault();

      if (isEmailValid && isDisplayNameValid) {
        setIsModalOpen(true);
      }
    },
    [isEmailValid, isDisplayNameValid, setIsModalOpen],
  );

  // 컨펌 모달 확인을 누르면 변경된 이메일과 닉네임 저장
  const handleProfileEditSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const auth = getAuth();
      const currentUser = auth.currentUser;

      try {
        // 변경된 이메일과 닉네임 정보 가져오기
        await updateEmail(currentUser, profile.email);
        await updateProfile(currentUser, { displayName: profile.displayName });

        // Firebase Authentication의 이메일 정보를 Firestore에 업데이트
        const db = getFirestore();
        const userDocRef = doc(db, 'users', currentUser.uid);

        await updateDoc(userDocRef, { email: profile.email, displayName: profile.displayName });

        // Firestore 데이터 다시 가져오기
        const userDoc = await getDoc(userDocRef);

        setProfile({
          email: userDoc.data().email,
          displayName: userDoc.data().displayName,
        });

        console.log('프로필 수정 성공');
        setIsModalOpen(false);
        navigate(-1);
      } catch (error) {
        console.log(error);
      }
    },
    [profile.displayName, profile.email, navigate],
  );

  // 컨펌 모달 취소를 누르면 모달 사라짐
  const onCancelClick = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  return (
    <>
      <Header />
      <S.Container>
        <S.HeaderContainer>
          <S.Title>내 정보 수정하기</S.Title>
        </S.HeaderContainer>
        <S.Form onSubmit={handleProfileEditSubmit}>
          <InputWithLabel
            id='userEmail'
            labelText='이메일'
            type='email'
            value={profile.email}
            onChange={handleEmailChange}
            errorMessage={emailError}
          />
          <InputWithLabel
            id='userNick'
            labelText='닉네임'
            type='text'
            value={profile.displayName}
            onChange={handleNicknameChange}
            errorMessage={displayNameError}
          />
          <Button size='lg' text='저장' onClick={onSaveClick} btnDisabled={btnDisabled} />
        </S.Form>
      </S.Container>
      {isModalOpen && (
        <Portal>
          <ConfirmModal
            onClickClose={setIsModalOpen}
            visible={isModalOpen}
            msg='변경 사항을 저장하시겠습니까?'
            leftBtnMsg='확인'
            leftOnclick={handleProfileEditSubmit}
            rightBtnMsg='취소'
            rightOnclick={onCancelClick}
          />
        </Portal>
      )}
    </>
  );
}

export default ProfileEdit;
