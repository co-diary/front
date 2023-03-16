import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import InputWithLabel from '../../components/common/InputWithLabel';
import useSignup from '../../hooks/useSignup';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [displayName, setDisplayName] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');
  const [displayNameError, setDisplayNameError] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(null);
  const [isDisplayNameValid, setIsDisplayNameValid] = useState(null);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const { error, isPending, signup } = useSignup();
  const emailRef = useRef(null);

  const [alreadyError, setAlreadyError] = useState(false);
  const [alreadyErrorMessage, setAlreadyErrorMessage] = useState('');

  useEffect(() => {
    if (isEmailValid && isPasswordValid && isPasswordCheckValid && isDisplayNameValid) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [isEmailValid, isPasswordValid, isPasswordCheckValid, isDisplayNameValid]);

  useEffect(() => {
    if (error) {
      setAlreadyError(true);
      setAlreadyErrorMessage('이미 가입된 이메일입니다.');
      emailRef.current.focus();
    }
  }, [error]);

  useEffect(() => {
    if (isPending) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [isPending]);

  const handleEmailChange = useCallback(
    (e) => {
      setEmail(e.target.value);
      const emailRegExp =
        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{2,3}$/;

      if (!emailRegExp.test(e.target.value)) {
        setIsEmailValid(false);
        setEmailError('이메일 형식이 올바르지 않습니다.');
      } else {
        setIsEmailValid(true);
        setEmailError(null);
      }

      if (error) {
        setEmailError(null);
      }
    },
    [error],
  );

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;

    if (!passwordRegExp.test(e.target.value)) {
      setIsPasswordValid(false);
      setPasswordError('6~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
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
      setIsDisplayNameValid(false);
      setDisplayNameError('2~6자 한글 또는 영문을 사용하세요.');
    } else {
      setIsDisplayNameValid(true);
      setDisplayNameError(null);
    }
  }, []);

  const handleEmailRequired = useCallback(
    (e) => {
      if (e.target.value === '') {
        setIsEmailValid(false);
        setEmailError('필수 입력 항목입니다.');
      }

      if (error) {
        setEmailError(null);
      }
    },
    [error],
  );

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

  const handleSignupSubmit = useCallback(
    (e) => {
      e.preventDefault();
      signup(email, password, displayName);
    },
    [email, password, displayName, signup],
  );

  return (
    <>
      <Header />
      <S.Container>
        <S.HeaderContainer>
          <S.Title>회원가입</S.Title>
        </S.HeaderContainer>
        <S.Form onSubmit={handleSignupSubmit}>
          <InputWithLabel
            id='userEmail'
            labelText='이메일'
            type='email'
            value={email}
            placeholder='이메일을 입력하세요.'
            onChange={handleEmailChange}
            onBlur={handleEmailRequired}
            ref={emailRef}
            inputValid={isEmailValid}
            errorMessage={emailError}
            alreadyError={alreadyError}
            alreadyErrorMessage={alreadyErrorMessage}
          />
          <InputWithLabel
            id='userPw'
            labelText='비밀번호'
            type='password'
            value={password}
            placeholder='영문 대 소문자, 숫자, 특수문자를 입력하세요.(6~16자)'
            onChange={handlePasswordChange}
            onBlur={handlePasswordRequired}
            inputValid={isPasswordValid}
            errorMessage={passwordError}
          />
          <InputWithLabel
            id='userPwCheck'
            labelText='비밀번호 확인'
            type='password'
            value={passwordCheck}
            placeholder='비밀번호를 재입력하세요.'
            onChange={handlePasswordCheckChange}
            onBlur={handlePasswordCheckRequired}
            inputValid={isPasswordCheckValid}
            errorMessage={passwordCheckError}
          />
          <InputWithLabel
            id='userNick'
            labelText='닉네임'
            type='text'
            value={displayName}
            placeholder='한글 또는 영문을 입력하세요.(2~6자)'
            onChange={handleNicknameChange}
            onBlur={handleNicknameRequired}
            inputValid={isDisplayNameValid}
            errorMessage={displayNameError}
          />
          <Button size='lg' text='회원가입' btnDisabled={btnDisabled} />
        </S.Form>
      </S.Container>
    </>
  );
}

export default SignUp;
