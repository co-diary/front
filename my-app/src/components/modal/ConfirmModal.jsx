import React from 'react';
import styled from 'styled-components';

function ConfirmModal() {
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 252px;
    height: 110px;
    padding-top: 2.5rem;
    background-color: tomato;
    border-radius: 1rem;
  `;

  const Msg = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 1.6rem;
  `;

  const Btns = styled.div`
    display: flex;
    /* position: absolute;
    bottom: 0;
    right: 0;
    left: 0; */
    width: 100%;
    border-top: 1px solid black;
  `;

  const Btn = styled.button`
    width: 50%;
    padding: 1.5rem 0 1.5rem;
    overflow: hidden;
    border-bottom-left-radius: 1rem;
    border-right: 1px solid black;
  `;

  const BtnRed = styled.button`
    width: 50%;
    padding: 1.5rem 0 1.5rem;
    overflow: hidden;
    color: red;
    border-bottom-right-radius: 1rem;
  `;

  return (
    <>
      <Background />
      <Box>
        <Msg>기록을 삭제할까요?</Msg>
        <Btns>
          <Btn>취소</Btn>
          <BtnRed>삭제</BtnRed>
        </Btns>
      </Box>
    </>
  );
}

export default ConfirmModal;
