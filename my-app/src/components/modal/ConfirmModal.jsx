import React from 'react';
import styled, { keyframes } from 'styled-components';
import Theme from '../../styles/Theme';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.2;
  z-index: 99;
  background-color: black;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 25.2rem;
  height: 11rem;
  padding-top: 2.5rem;
  background-color: ${Theme.WHITE};
  border-radius: 1rem;

  animation: ${fadeIn} 0.2s linear;
`;

const Msg = styled.p`
  text-align: center;
  font-family: LINESeedKR-bd;
  font-size: 1.6rem;
`;

const Btns = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${Theme.SHADOW_BORDER};
`;

const Btn = styled.button`
  width: 50%;
  padding: 1.5rem 0 1.5rem;
  overflow: hidden;
  border-bottom-left-radius: 1rem;
  border-right: 1px solid ${Theme.SHADOW_BORDER};
  background-color: ${Theme.WHITE};
`;

const BtnRed = styled.button`
  width: 50%;
  padding: 1.5rem 0 1.5rem;
  overflow: hidden;
  color: ${Theme.ERROR};
  border-bottom-right-radius: 1rem;
  background-color: ${Theme.WHITE};
`;

function ConfirmModal({ onClickClose, msg, leftBtnMsg, leftOnclick, rightBtnMsg, rightOnclick }) {
  return (
    <>
      <Background onClick={onClickClose} />
      <Box>
        <Msg>{msg}</Msg>
        <Btns>
          <Btn onClick={leftOnclick}>{leftBtnMsg}</Btn>
          <BtnRed onClick={rightOnclick}>{rightBtnMsg}</BtnRed>
        </Btns>
      </Box>
    </>
  );
}

export default ConfirmModal;
