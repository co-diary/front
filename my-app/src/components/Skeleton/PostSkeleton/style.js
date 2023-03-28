import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';

export const Skeleton = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  height: 18.4rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #f2f2f2;
`;

export const SkeletonCover = styled.div`
  flex-basis: 13.6rem;
  flex-shrink: 0;
  background-color: #ddd;
`;

export const SkeletonContents = styled.div`
  flex-grow: 1;
  padding: 2.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SkeletonTitle = styled.div`
  background-color: #ddd;
  height: 1.8rem;
  width: 50%;
  border-radius: 0.5rem;
`;

export const SkeletonTxt = styled.div`
  width: 100%;
  height: 1.8rem;
  border-radius: 0.5rem;
  background-color: #ddd;

  & + div {
    margin-top: 0.5rem;
  }
`;

export const SkeletonPostReview = styled.div`
  flex-grow: 1;
  padding-top: 1rem;
  border-top: 1px solid ${Theme.SHADOW_BORDER};
`;

export const SkeletonTagContainer = styled.div`
  margin-top: 0.7rem;
`;

export const SkeletonTag = styled.div`
  display: inline-block;
  padding: 0.5rem 0.6rem;
  width: 4rem;
  height: 1.8rem;
  border-radius: 3rem;
  background-color: #ddd;

  & + div {
    margin-left: 0.6rem;
  }
`;
