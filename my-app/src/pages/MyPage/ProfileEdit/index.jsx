import React from 'react';
import * as S from './style';
import Button from '../../../components/common/Button';
import Header from '../../../components/common/Header';

function ProfileEdit() {
  return (
    <>
      <Header />
      <S.Container>
        <S.HeaderContainer>
          <S.Title>내 정보 수정하기</S.Title>
        </S.HeaderContainer>
        <S.Form>
          <S.InputContainer>
            <S.Label>이메일</S.Label>
            <S.Input type='email' value='본인 계정' readOnly />
          </S.InputContainer>
          <S.InputContainer>
            <S.Label>닉네임</S.Label>
            <S.Input type='text' value='본인 닉네임' required />
            <S.ErrorMessage>2~6자 한글, 영문을 사용하세요.</S.ErrorMessage>
          </S.InputContainer>
          <Button size='lg' text='저장' />
        </S.Form>
      </S.Container>
    </>
  );
}

export default ProfileEdit;
