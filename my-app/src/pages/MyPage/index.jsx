import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import Button from '../../components/common/Button';




function MyPage() {
  return (
    <S.Container>
      <Header />
      <S.BoxOne>
        <div className='UserContainer'>
          <S.UserName>곽두팔이</S.UserName>
          <S.UserEmail>email@abc.com</S.UserEmail>
        </div>
        <S.ButtonContainer>
          <Button size='default' text='프로필 수정'>
            <Link to ={'/profile/:userId/edit'} alt='프로필수정버튼'></Link>
          </Button>
        </S.ButtonContainer>
      </S.BoxOne>
      <S.BoxTwo>
        <S.MyPageLists>
          <S.MyPageList>공지사항
            <S.WebVersion>v.1.0.0</S.WebVersion>
          </S.MyPageList>
          <S.MyPageList>문의하기</S.MyPageList>
          <S.MyPageList>고객센터/운영정책</S.MyPageList>
          <S.MyPageList>로그아웃</S.MyPageList>
          <S.Deactivate>탈퇴하기</S.Deactivate>
        </S.MyPageLists>
      </S.BoxTwo>
      <NavBar /> 
    </S.Container>
  )
}

export default MyPage;
