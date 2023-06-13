import React from 'react';
import * as S from './style';

function BottomSheetDefault({ onClickClose, onClickEdit, onClickDelete }) {
  return (
    <S.Container>
      <S.CloseHandler onClick={onClickClose} />
      <S.Contents onClick={onClickEdit}>수정</S.Contents>
      <S.Contents onClick={onClickDelete}>삭제</S.Contents>
    </S.Container>
  );
}

export default BottomSheetDefault;
