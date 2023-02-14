import React from 'react';
import * as S from './style';
import Button from '../../components/common/Button';

function Login() {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>로그인</S.Title>
      </S.HeaderContainer>
      <S.Form>
        <S.InputContainer>
          <S.Label>이메일</S.Label>
          <S.Input type='email' placeholder='이메일을 입력하세요.' required />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>비밀번호</S.Label>
          <S.Input type='password' placeholder='비밀번호를 입력하세요.' required />
          <S.ErrorMessage>이메일과 비밀번호가 일치하지 않습니다.</S.ErrorMessage>
        </S.InputContainer>
        <Button size='lg' text='로그인' />
      </S.Form>
      <S.SignUpLink to='/signup'>이메일로 회원가입</S.SignUpLink>
    </S.Container>
  );
}

export default Login;
