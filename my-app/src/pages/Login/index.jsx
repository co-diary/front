import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import Button from '../../components/common/Button';
import InputWithLabel from '../../components/common/InputWithLabel';
import useLogin from '../../hooks/useLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isLoginAllow, setIsLoginAllow] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { error, login } = useLogin();
  const emailRef = useRef(null);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);

    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{2,3}$/;

    if (!emailRegExp.test(e.target.value)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);

    if (e.target.value) {
      setIsPasswordValid(true);
    }
  }, []);

  useEffect(() => {
    if (!!email.length && !!password.length) {
      setIsLoginAllow(true);
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [email, password]);

  useEffect(() => {
    if (error) {
      setBtnDisabled(true);
      setIsLoginAllow(false);
      setLoginError('이메일 또는 비밀번호가 일치하지 않습니다.');
      emailRef.current.focus();
    }
  }, [error]);

  const handleLoginSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login(email, password);
    },
    [email, password],
  );

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>로그인</S.Title>
      </S.HeaderContainer>
      <S.Form onSubmit={handleLoginSubmit}>
        <InputWithLabel
          id='userEmail'
          labelText='이메일'
          type='email'
          value={email}
          placeholder='이메일을 입력하세요.'
          onChange={handleEmailChange}
          ref={emailRef}
          isLoginAllow={isLoginAllow}
        />
        <InputWithLabel
          id='userPassword'
          labelText='비밀번호'
          type='password'
          value={password}
          placeholder='비밀번호를 입력하세요.'
          onChange={handlePasswordChange}
          isLoginAllow={isLoginAllow}
          errorMessage={loginError}
        />
        <Button size='lg' text='로그인' btnDisabled={btnDisabled} />
      </S.Form>
      <S.SignUpLink to='/signup'>이메일로 회원가입</S.SignUpLink>
    </S.Container>
  );
}

export default Login;
