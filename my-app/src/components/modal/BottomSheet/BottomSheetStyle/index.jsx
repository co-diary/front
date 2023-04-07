import React from 'react';
import styled from 'styled-components';
import Theme from '../../../../styles/Theme';
import BottomSheetForm from '../BottomSheetForm/BottomSheetForm';
import BottomSheetHeader from '../BottomSheetHeader';

const Contents = styled.button`
  background-color: ${Theme.WHITE};
  text-align: left;
  padding: 1.3rem 0 1.4rem 2.7rem;
  font-size: 1.4rem;
`;

const modal = {
  default: (
    <>
      <BottomSheetHeader />
      <div>
        <Contents>수정</Contents>
        <Contents>삭제</Contents>
      </div>
    </>
  ),
  form: (
    <>
      <BottomSheetHeader type={'form'} />
      <BottomSheetForm />
    </>
  ),
};

function ModalStyle({ type }) {
  return <>{modal[type]}</>;
}

// 기본 모달 옵션 default로 설정

ModalStyle.defaultProps = {
  type: 'default',
};

export default ModalStyle;
