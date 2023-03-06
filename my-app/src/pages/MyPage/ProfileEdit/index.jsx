import React from 'react';
import * as S from './style';
import Button from '../../../components/common/Button';
import Header from '../../../components/common/Header';
import InputWithLabel from '../../../components/common/InputWithLabel';

function ProfileEdit() {
  return (
    <>
      <Header />
      <S.Container>
        <S.HeaderContainer>
          <S.Title>내 정보 수정하기</S.Title>
        </S.HeaderContainer>
        <S.Form>
          <InputWithLabel id='userEmail' labelText='이메일' type='email' />
          <InputWithLabel id='userNick' labelText='닉네임' type='text' />
          <Button size='lg' text='저장' />
        </S.Form>
      </S.Container>
    </>
  );
}

export default ProfileEdit;
