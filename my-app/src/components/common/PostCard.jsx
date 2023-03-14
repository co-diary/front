import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import IconHeartOff from '../../assets/Icon-Heart-off.png';
import IconStarOn from '../../assets/Icon-star-on.png';

const PostCardBox = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  height: 18.4rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 6px 2px ${Theme.SHADOW_BORDER};
  overflow: hidden;
`;

const PostCover = styled.div`
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

const PostContent = styled.div`
  flex-grow: 1;
  padding: 2.4rem 1.6rem;
  display: flex;
  flex-direction: column;
`;

const PostInfo = styled.div`
  flex-basis: 6.9rem;
  min-height: 0;
  padding-bottom: 0.8rem;
`;

const PostLike = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 1rem;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const StarRatingContainer = styled.div`
  img {
    width: 1.8rem;
  }
`;

const MenuInfo = styled.strong`
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

const StoreInfo = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${Theme.MAIN_GRAY};
  width: 18.2rem;
  margin-top: -0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PostReview = styled.div`
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

const TagContainer = styled.div`
  margin-top: 0.6rem;
`;

const Tag = styled.span`
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

function PostCard() {
  return (
    <PostCardBox>
      <PostCover>
        <span>02.01</span>
        <img
          src='https://raw.githubusercontent.com/christianB053/likelion/develop/coffee-2139592_960_720.jpg'
          alt='메뉴 썸네일 사진'
        />
      </PostCover>
      <PostContent>
        <PostInfo>
          <PostLike>
            <img src={IconHeartOff} alt='좋아요 on/off' />
          </PostLike>
          <StarRatingContainer>
            <img src={IconStarOn} alt='별점(더 자세한 설명?)' />
            <img src={IconStarOn} alt='별점' />
            <img src={IconStarOn} alt='별점' />
            <img src={IconStarOn} alt='별점' />
            <img src={IconStarOn} alt='별점' />
          </StarRatingContainer>
          <MenuInfo>촉촉한 쇼콜라퐁당</MenuInfo>
          <StoreInfo>상호명 스벅 송파점</StoreInfo>
        </PostInfo>
        <PostReview>
          <p>
            각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계
            행정기관에 필요한 지시를 할 수 있다. 정부는 예산에 변경을 가할 필요가 있을 때에는
            추가경정예산안을
          </p>
          <TagContainer>
            <Tag to='#'>#넘맛탱</Tag>
            <Tag to='#'>#넘맛탱구리</Tag>
          </TagContainer>
        </PostReview>
      </PostContent>
    </PostCardBox>
  );
}

export default PostCard;
