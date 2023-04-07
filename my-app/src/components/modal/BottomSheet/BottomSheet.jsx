import React, { useEffect } from 'react';
import * as S from './style';
import useToggle from '../../../hooks/useToggle';
import BottomSheetHeader from './BottomSheetHeader';

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
      <S.Background visible={visible} onClick={onClickClose} />
      <S.Box visible={visible}>
        <BottomSheetHeader onClick={onClickClose} />
        <S.Contents onClick={onClickEdit}>수정</S.Contents>
        <S.Contents onClick={onClickDelete}>삭제</S.Contents>
      </S.Box>
    </>
  );
}

export default BottomSheet;
