import React from 'react';
import * as S from './style';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

function SignUp() {
  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <S.Title>회원가입</S.Title>
        </S.Header>
        <S.Form>
          <S.InputContainer>
            <S.Label>이메일</S.Label>
            <S.Input type='email' placeholder='이메일을 입력하세요' required />
            <S.ErrorMessage>이메일 형식이 올바르지 않습니다.</S.ErrorMessage>
          </S.InputContainer>
          <S.InputContainer>
            <S.Label>비밀번호</S.Label>
            <S.Input type='password' placeholder='숫자를 입력하세요.(6~16자)' required />
            <S.ErrorMessage>6~16자 숫자를 사용하세요.</S.ErrorMessage>
          </S.InputContainer>
          <S.InputContainer>
            <S.Label>비밀번호 확인</S.Label>
            <S.Input type='password' placeholder='비밀번호를 재입력하세요.' required />
            <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
          </S.InputContainer>
          <S.InputContainer>
            <S.Label>닉네임</S.Label>
            <S.Input type='text' placeholder='한글, 영문을 입력하세요.(2~6자)' required />
            <S.ErrorMessage>2~6자 한글, 영문을 사용하세요.</S.ErrorMessage>
          </S.InputContainer>
          <Button size='lg' text='회원가입' />
        </S.Form>
      </S.Container>
    </>
  );
}

export default SignUp;
