import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import { pcMediaQuery } from '../../../styles/MediaQuery';

export const PostCardBox = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  height: 18.4rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 6px 2px ${Theme.SHADOW_BORDER};
  overflow: hidden;
  cursor: pointer;
`;

export const PostCover = styled.div`
  flex-basis: 13.6rem;
  flex-shrink: 0;
  position: relative;

  span {
    position: absolute;
    top: 2.7rem;
    left: -3.5rem;
    padding: 0 0.5rem;
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-family: 'LINESeedKR-Bd';
    color: white;
    text-shadow: -0.6px 0 #767676, 0 0.6px #767676, 0.6px 0 #767676, 0 -0.6px #767676;

    border-radius: 1rem;

    transform: rotate(-90deg) translateY(100%); /* 수정 */
  }
`;

export const PostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostContent = styled.div`
  padding: 2.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const PostInfo = styled.div`
  width: 100%;
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

  @media ${pcMediaQuery} {
    img {
      width: 2.2rem;
      height: 2.2rem;
    }
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StoreInfo = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${Theme.MAIN_GRAY};
  margin-top: -0.1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const PostReview = styled.div`
  width: 100%;
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

  /* ::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${Theme.SHADOW_BORDER};
  } */
`;

export const TagContainer = styled.div`
  margin-top: 0.6rem;
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 0.5rem 0.6rem;
  border-radius: 3rem;
  color: ${Theme.WHITE};
  background-color: ${Theme.SUB_ORANGE};

  & + span {
    margin-left: 0.6rem;
    background-color: ${Theme.SUB_PINK};
  }
  cursor: pointer;
`;
