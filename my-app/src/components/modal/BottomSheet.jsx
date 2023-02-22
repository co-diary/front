import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Theme from '../../styles/Theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(3rem);
  }

  100% {
    opacity: 0;
    transform: translateY(0rem);
  }
`;

const modalSettings = (visible) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 99;
  animation: ${visible ? fadeIn : fadeOut} 0.4s ease-out;
  transition: visibility 0.15s ease-out;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  ${({ visible }) =>
    visible
      ? css`
          background-color: rgba(0, 0, 0, 0.2);
        `
      : css`
          opacity: 0;
        `}
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
  background: ${Theme.WHITE};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 3.6rem 0 0.5rem 0;

  ${(props) => modalSettings(props.visible)}
`;

const CloseHandler = styled.button`
  width: 5rem;
  height: 0.4rem;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  background-color: ${Theme.SHADOW_BORDER};
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2.5rem;
    margin-top: -1rem;
  }
`;

const Contents = styled.button`
  background-color: ${Theme.WHITE};
  text-align: left;
  padding: 1.3rem 0 1.4rem 2.7rem;
  font-size: 1.4rem;
`;

function BottomSheet({ onClickClose, onClickEdit, onClickDelete }) {
  const [visible, setVisible] = useState(false);

  console.log(visible);

  useEffect(() => {
    if (onClickClose) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 400);
    }
  }, []);

  return (
    <>
      <Background visible={visible} onClick={onClickClose} />
      <Box visible={visible}>
        <CloseHandler onClick={onClickClose} />
        <Contents onClick={onClickEdit}>수정</Contents>
        <Contents onClick={onClickDelete}>삭제</Contents>
      </Box>
    </>
  );
}

export default BottomSheet;
