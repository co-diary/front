import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Theme from '../../styles/Theme';
import useToggle from '../../hooks/useToggle';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
    transform: translateY(3rem);
  }

  to{
    opacity: 0;
    transform: translateY(0rem);
  }
`;

const modalSettings = (visible) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 99;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ visible }) =>
    visible
      ? css`
          background-color: rgba(0, 0, 0, 0.2);
        `
      : css`
          display: none;
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

  ${(props) => modalSettings(props.visible)};
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

function BottomSheet({ visible, onClickClose, onClickEdit, onClickDelete }) {
  const [isOpen, setIsOpen] = useToggle(false);

  useEffect(() => {
    let timeoutId;

    if (visible) {
      setIsOpen(true);
    } else {
      timeoutId = setTimeout(() => setIsOpen(false), 150);
    }
    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  if (!isOpen) {
    return null;
  }

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
