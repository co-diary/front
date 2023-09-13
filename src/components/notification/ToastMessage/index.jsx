import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as S from './style.js';

function ToastMessage({ showToast, message }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(showToast);

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CSSTransition in={show} timeout={400} classNames='toast' unmountOnExit>
      <S.ToastBox>
        <S.ToastText>{message}</S.ToastText>
      </S.ToastBox>
    </CSSTransition>
  );
}

export default ToastMessage;
