import React from 'react';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';

function Home() {
  return (
    <>
      <Header />
      <Button size='lg' text='회원가입' />
      <Button size='md' text='회원가입(md)' />
      <Button size='ms' text='회원가입(ms)' />
      <Button size='sm' text='등록' />
      <Button size='profile' text='프로필수정' />
      <NavBar />
    </>
  );
}

export default Home;
