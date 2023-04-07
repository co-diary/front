import React, { useEffect } from 'react';
import * as S from './style';
import useToggle from '../../../hooks/useToggle';
import ModalStyle from './BottomSheetStyle';

function BottomSheet({ type, visible, onClickClose }) {
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
      <S.Background visible={visible} onClick={onClickClose} />
      <S.Box visible={visible}>
        <ModalStyle type={type} />
      </S.Box>
    </>
  );
}

export default BottomSheet;
