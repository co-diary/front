import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import React from 'react';
import * as S from './style';
import { Tag, TagContainer } from '../../post/PostCard/style';

function OverlayInfo({ postInfo }) {
  console.log('인포', postInfo);
  return (
    <CustomOverlayMap
      position={{
        lat: postInfo.latLng[0],
        lng: postInfo.latLng[1],
      }}
    >
      <S.Container>
        <S.Image src={postInfo.photo} />
        <S.Content>
          <strong>
            {postInfo.shop}&nbsp;
            {postInfo.location}
          </strong>
          <p>{postInfo.menu}</p>
          <TagContainer>
            {postInfo.tag.map((value, index) => (
              <Tag key={index}>#{value}</Tag>
            ))}
          </TagContainer>
        </S.Content>
      </S.Container>
    </CustomOverlayMap>
  );
}

export default OverlayInfo;
