import React from 'react';
import * as S from './style';

function NoHashTag() {
  return (
    <S.TextContainer>
      <S.Text>
        아직 등록된 <S.TextDeco>#해시태그</S.TextDeco> 가 없어요.
      </S.Text>
      <S.Text>
        <S.TextDeco bgColor='SUB_PINK'>#해시태그</S.TextDeco> 를 등록해보세요!
      </S.Text>
    </S.TextContainer>
  );
}

export default NoHashTag;
