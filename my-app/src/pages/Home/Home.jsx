import React from 'react';
import Button from '../../components/common/Button';

function Home() {
  return (
    <>
      <Button size='lg' text='회원가입' />
      <Button size='md' text='회원가입(md)'/>
      <Button size='ms' text='회원가입(ms)' />
      <Button size='sm' text='등록'/>
      <Button size='profile' text='프로필수정'/>
    </>
  );
}

export default Home;
