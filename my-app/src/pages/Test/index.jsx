import React from 'react';
import { useRecoilState } from 'recoil';
import Portal from '../../components/modal/Portal';

import IconBack from '../../assets/Icon-X.png';
import BottomSheetForm from '../../components/modal/BottomSheet/BottomSheetStyle/BottomSheetForm';
import BottomSheet from '../../components/modal/BottomSheet';

import modalState from '../../atom/modalRecoil';

function Test() {
  const [modal, setModal] = useRecoilState(modalState);

  console.log(modal);

  const onClickIcon = () => {
    console.log('눌렀음');
    setModal({ ...modal, visible: false });
  };

  // 실제 페이지 사용 예시

  return (
    <>
      <button onClick={() => onClickIcon()}>나는야 외러ㅗ운 버튼 </button>

      <Portal>
        <BottomSheet visible={modal} onClickClose={onClickIcon}>
          <BottomSheetForm
            title='위치검색'
            Icon={IconBack}
            IconAlt='아이콘Alt'
            onClickIcon={onClickIcon}
          />
        </BottomSheet>
      </Portal>
    </>
  );
}

export default Test;
