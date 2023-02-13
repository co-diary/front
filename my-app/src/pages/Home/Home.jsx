import React from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';

const Wrapper = styled.main`
  height: calc(100vh - 10.8rem);
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <Button size='lg' text='회원가입' />
        <Button size='md' text='회원가입(md)' />
        <Button size='ms' text='회원가입(ms)' />
        <Button size='sm' text='등록' />
        <Button size='profile' text='프로필수정' />
      </Wrapper>
      <NavBar />
    </>
  );
}

export default Home;
