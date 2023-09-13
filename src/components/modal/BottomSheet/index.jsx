import React from 'react';
import * as S from './style';

function BottomSheet({ visible, onClickClose, children }) {
  if (visible) {
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

export default React.memo(BottomSheet);
