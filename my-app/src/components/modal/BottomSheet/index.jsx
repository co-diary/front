import React, { useEffect } from 'react';
import * as S from './style';
import useToggle from '../../../hooks/useToggle';

function BottomSheet({ visible, onClickClose, children }) {
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

  // 모달 열려있을 때 백그라운드 스크롤 방지

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <S.Background visible={visible} onClick={onClickClose} />
      <S.Box visible={visible}>{children}</S.Box>
    </>
  );
}

export default BottomSheet;
