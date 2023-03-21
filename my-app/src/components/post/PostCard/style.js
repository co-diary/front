import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const PostCardBox = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  height: 18.4rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 6px 2px ${Theme.SHADOW_BORDER};
  overflow: hidden;
`;

export const PostCover = styled.div`
  flex-basis: 13.6rem;
  flex-shrink: 0;

  span {
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    padding: 0.4rem 1rem 0.2rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-family: 'LINESeedKR-Bd';
    color: white;
    background-color: black;
    border-radius: 3rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostContent = styled.div`
  flex-grow: 1;
  padding: 2.4rem 1.6rem;
  display: flex;
  flex-direction: column;
`;

export const PostInfo = styled.div`
  flex-basis: 6.9rem;
  min-height: 0;
  padding-bottom: 0.8rem;
`;

export const PostLike = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 1rem;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const StarRatingContainer = styled.div`
  img {
    width: 1.8rem;
  }
`;

export const MenuInfo = styled.strong`
  display: inline-block;
  font-size: 1.8rem;
  font-family: 'LINESeedKR-Bd';
  line-height: 2.2rem;
  margin-top: 0.5rem;
  width: 18.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StoreInfo = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${Theme.MAIN_GRAY};
  width: 18.2rem;
  margin-top: -0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PostReview = styled.div`
  flex-grow: 1;
  padding-top: 1rem;
  border-top: 1px solid ${Theme.SHADOW_BORDER};

  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    overflow: hidden;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const TagContainer = styled.div`
  margin-top: 0.6rem;
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 0.5rem 0.6rem 0.3rem;
  border-radius: 3rem;
  color: ${Theme.WHITE};
  background-color: ${Theme.SUB_ORANGE};

  & + span {
    margin-left: 0.6rem;
    background-color: ${Theme.SUB_PINK};
  }
`;
