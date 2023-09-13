import React from 'react';
import Button from '../../common/Button';
import * as S from './style';

function Profile({ user, goEdit }) {
  return (
    <S.Profile>
      <div>
        <S.UserName>{user?.displayName || '사용자 이름'}</S.UserName>
        <S.UserEmail>{user?.email || 'email@abc.com'}</S.UserEmail>
      </div>
      <S.ButtonContainer>
        <Button size='default' text='프로필 수정' onClick={goEdit} />
      </S.ButtonContainer>
    </S.Profile>
  );
}

export default Profile;
