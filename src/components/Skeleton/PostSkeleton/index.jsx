import React from 'react';
import * as S from './style';

function PostSkeleton() {
  return (
    <S.Skeleton>
      <S.SkeletonCover />
      <S.SkeletonContents>
        <S.SkeletonTitle />

        <S.SkeletonTitle />
        <S.SkeletonTxt />
        <S.SkeletonPostReview>
          <S.SkeletonTxt />
          <S.SkeletonTagContainer>
            <S.SkeletonTag />
            <S.SkeletonTag />
          </S.SkeletonTagContainer>
        </S.SkeletonPostReview>
      </S.SkeletonContents>
    </S.Skeleton>
  );
}

export default PostSkeleton;
