import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { v4 as uuidv4 } from 'uuid';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconStarOff from '../../../assets/Icon-star-off.png';
import SimpleSlider from '../../../components/post/SimpleSlider';
import currentPost from '../../../atom/currentPostRecoil';
import * as S from './style';

export default function PostDetailBox() {
  const post = useRecoilValue(currentPost);
  const scoreIndexs = [0, 1, 2, 3, 4];
  const menuPrice = post?.price;
  const priceComma = menuPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const hashtag = post?.tag;
  const images = post?.photo;
  const date = post?.date;
  const latLng = post?.address.latLng;
  const slicedDate = date?.toDate().toISOString().slice(2, 10).replaceAll('-', '.');
  const navigate = useNavigate();

  const handleLocationMap = useCallback(() => {
    navigate('/location', {
      state: latLng,
    });
  }, [latLng]);

  const handleTag = useCallback((tag) => {
    navigate('/hashtag/keyword', { state: { data: tag } });
  }, []);

  const isLocationTrue = post.address.latLng[0] + post.address.latLng[1];

  return (
    <S.Container>
      <header>
        <h1 className='ir'>게시글 상세 페이지</h1>
      </header>
      <S.Section>
        <h2 className='ir'>게시글 날짜, 메뉴명과 별점</h2>
        <S.DateInfo>{slicedDate}</S.DateInfo>
        <S.MenuInfo>{post.menu}</S.MenuInfo>
        <S.StarRatingContainer>
          {scoreIndexs.map((index) =>
            post.score > index ? (
              <img src={IconStarOn} alt='별점' key={uuidv4()} />
            ) : (
              <img src={IconStarOff} alt='체크되지 않은 별점' aria-hidden='true' key={uuidv4()} />
            ),
          )}
        </S.StarRatingContainer>
      </S.Section>
      <S.Section>
        <h2 className='ir'>메뉴 후기와 매장 정보</h2>
        {/* {typeof images === 'string' && (
          <S.PhotoCarousel>
            <img src={images} alt='' />
          </S.PhotoCarousel>
        )}
         */}

        {!!images.length && typeof images === 'object' && (
          <S.PhotoCarousel>
            <SimpleSlider images={images} />
          </S.PhotoCarousel>
        )}
        <S.ListContainer>
          <S.ListItem>
            <S.ListTitle>후기</S.ListTitle>
            <p>{post.review}</p>
          </S.ListItem>
          <S.ListItem>
            <S.ListTitle>매장 정보</S.ListTitle>
            <S.DlContainer>
              <S.DlBox>
                <S.DlTitle>가격</S.DlTitle>
                <dd>{priceComma}원</dd>
              </S.DlBox>
              <S.DlBox>
                <S.DlTitle>상호명</S.DlTitle>
                <dd>{post.shop}</dd>
              </S.DlBox>
              {/* 등록 위치 없을 경우 맵 뜨지 않도록 처리 */}
              {!!isLocationTrue && (
                <>
                  <S.DlBox>
                    <S.DlTitle>위치</S.DlTitle>
                    <dd>{post.address.location}</dd>
                  </S.DlBox>
                  <Map
                    center={{
                      lat: latLng[0],
                      lng: latLng[1],
                    }}
                    style={{
                      width: '296px',
                      height: '66px',
                      borderRadius: '10px',
                      marginTop: '10px',
                      marginLeft: 'auto',
                    }}
                    level={3}
                    onClick={handleLocationMap}
                  >
                    <MapMarker
                      position={{
                        lat: latLng[0],
                        lng: latLng[1],
                      }}
                    />
                  </Map>
                </>
              )}
            </S.DlContainer>
          </S.ListItem>
          <S.ListItem>
            <S.ListTitle>태그</S.ListTitle>
            {hashtag &&
              hashtag.map((tag) => (
                <S.TagLink key={uuidv4()} onClick={() => handleTag(tag)}>
                  #{tag}
                </S.TagLink>
              ))}
          </S.ListItem>
        </S.ListContainer>
      </S.Section>
    </S.Container>
  );
}
