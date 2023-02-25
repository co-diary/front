import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');
  const [displayNameError, setDisplayNameError] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);
  const [isDisplayNameValid, setIsDisplayNameValid] = useState(false);

  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (isEmailValid && isPasswordValid && isPasswordCheckValid && isDisplayNameValid) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [isEmailValid, isPasswordValid, isPasswordCheckValid, isDisplayNameValid]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);

    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{2,3}$/;

    if (!emailRegExp.test(e.target.value)) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      setEmailError(null);
    }
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    if (!passwordRegExp.test(e.target.value)) {
      setIsPasswordValid(false);
      setPasswordError('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
    } else {
      setIsPasswordValid(true);
      setPasswordError(null);
    }
  }, []);

  const handlePasswordCheckChange = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);

      if (password !== e.target.value) {
        setIsPasswordCheckValid(false);
        setPasswordCheckError('비밀번호가 일치하지 않습니다.');
      } else {
        setIsPasswordCheckValid(true);
        setPasswordCheckError(null);
      }
    },
    [password],
  );

  const handleNicknameChange = useCallback((e) => {
    setDisplayName(e.target.value);
    const nicknameRegExp = /^(?=.*[a-zA-Z가-힣])[a-zA-Z가-힣]{2,6}$/;

    if (!nicknameRegExp.test(e.target.value)) {
      setDisplayNameError('2~6자 한글 또는 영문을 사용하세요.');
      setIsDisplayNameValid(false);
    } else {
      setDisplayNameError(null);
      setIsDisplayNameValid(true);
    }
  }, []);

  const handleEmailRequired = useCallback((e) => {
    if (e.target.value === '') {
      setIsEmailValid(false);
      setEmailError('필수 입력 항목입니다.');
    }
  }, []);

  const handlePasswordRequired = useCallback((e) => {
    if (e.target.value === '') {
      setIsPasswordValid(false);
      setPasswordError('필수 입력 항목입니다.');
    }
  }, []);

  const handlePasswordCheckRequired = useCallback((e) => {
    if (e.target.value === '') {
      setIsPasswordCheckValid(false);
      setPasswordCheckError('필수 입력 항목입니다.');
    }
  }, []);

  const handleNicknameRequired = useCallback((e) => {
    if (e.target.value === '') {
      setIsDisplayNameValid(false);
      setDisplayNameError('필수 입력 항목입니다.');
    }
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.HeaderContainer>
          <S.Title>회원가입</S.Title>
        </S.HeaderContainer>
        <S.Form>
          <S.InputContainer>
            <S.Label htmlFor='userEmail'>이메일</S.Label>
            <S.Input
              id='userEmail'
              type='email'
              value={email}
              placeholder='이메일을 입력하세요.'
              onChange={handleEmailChange}
              onBlur={handleEmailRequired}
              maxLength='30'
              required
            />
            {!isPasswordValid && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
          </S.InputContainer>
          <S.InputContainer>
            <S.Label htmlFor='userPw'>비밀번호</S.Label>
            <S.Input
              id='userPw'
              type='password'
              value={password}
              placeholder='영문 대 소문자, 숫자, 특수문자를 입력하세요.(8~16자)'
              onChange={handlePasswordChange}
              onBlur={handlePasswordRequired}
              maxLength='30'
              required
            />
            {!isPasswordValid && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
          </S.InputContainer>
          <S.InputContainer>
            <S.Label htmlFor='userPwCheck'>비밀번호 확인</S.Label>
            <S.Input
              id='userPwCheck'
              type='password'
              value={passwordCheck}
              placeholder='비밀번호를 재입력하세요.'
              onChange={handlePasswordCheckChange}
              onBlur={handlePasswordCheckRequired}
              maxLength='30'
              required
            />
            {!isPasswordCheckValid && <S.ErrorMessage>{passwordCheckError}</S.ErrorMessage>}
          </S.InputContainer>
          <S.InputContainer>
            <S.Label htmlFor='userNick'>닉네임</S.Label>
            <S.Input
              id='userNick'
              type='text'
              value={displayName}
              placeholder='한글 또는 영문을 입력하세요.(2~6자)'
              onChange={handleNicknameChange}
              onBlur={handleNicknameRequired}
              maxLength='30'
              required
            />
            {!isDisplayNameValid && <S.ErrorMessage>{displayNameError}</S.ErrorMessage>}
          </S.InputContainer>
          <Button size='lg' text='회원가입' btnDisabled={btnDisabled} />
        </S.Form>
      </S.Container>
    </>
  );
}

export default SignUp;
