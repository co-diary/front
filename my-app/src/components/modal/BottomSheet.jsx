import React from 'react';
import styled from 'styled-components';

function BottomSheet() {
  const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    z-index: 99;
    background-color: black;
  `;

  const Box = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 3.6rem 0 0.5rem 0;
  `;

  const CloseHandler = styled.button`
    width: 5rem;
    height: 0.4rem;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.5rem;
    background-color: #dbdbdb;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2.5rem;
      margin-top: -1rem;
    }
  `;

  const Contents = styled.button`
    background-color: white;
    text-align: left;
    padding: 1.3rem 0 1.4rem 2.7rem;
  `;

  return (
    <>
      <Background />
      <Box>
        <CloseHandler />
        <Contents>수정</Contents>
        <Contents>삭제</Contents>
      </Box>
    </>
  );
}

export default BottomSheet;
