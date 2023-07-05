import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router';
import * as S from './style';
import Button from '../../components/common/Button';
import InputWithLabel from '../../components/common/InputWithLabel';
import useLogin from '../../hooks/useLogin';
import { isLoggedIn } from '../../atom/authRecoil';
import LogoText from '../../assets/Logo-text.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isLoginAllow, setIsLoginAllow] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { error, isPending, login } = useLogin();
  const emailRef = useRef(null);
  const isLogin = useRecoilValue(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/home');
    }
  }, [isLogin]);

  useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setBtnDisabled(false);
      setIsLoginAllow(true);

      if (error) {
        setIsLoginAllow(false);
      }
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
    } else if (isPending) {
      setBtnDisabled(true);
    }
  }, [error, isPending]);

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
    } else {
      setIsPasswordValid(false);
    }
  }, []);

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
        <h1>
          <img src={LogoText} alt='커디어리' />
        </h1>
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
