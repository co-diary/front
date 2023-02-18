import React from 'react';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import Button from '../../../components/common/Button';
import IconStarOff from '../../../assets/Icon-star-off.png';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconLocationOff from '../../../assets/Icon-Nav-Map-off.png';
import IconCalendar from '../../../assets/Icon-Calendar.png';
import IconAddInput from '../../../assets/Icon-AddInput.png';
import IconAddPhoto from '../../../assets/Icon-AddPhoto.png';
import * as S from './style';

function PostUpload() {
  return (
    <>
      <Header title='오늘 작성할 커디어리' rightChild={<Button size='sm' text='등록' />} />
      <S.Container>
        <S.Form>
          <S.SelectBoxWrapper>
            <S.SelectBox>
              <button>음료</button>
            </S.SelectBox>
            <S.SelectBox>
              <button>논커피</button>
            </S.SelectBox>
          </S.SelectBoxWrapper>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='date'>날짜</S.Label>
            <S.Input type='text' placeholder='22.02.18' className='calendar' id='date' />
            <S.CalendarBtn src={IconCalendar} alt='달력 버튼' />
          </S.InputBox>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='menuName'>메뉴명</S.Label>
            <S.Input type='text' placeholder='메뉴명을 적어주세요.' id='menuName' />
          </S.InputBox>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='price'>가격</S.Label>
            <S.Input type='number' placeholder='가격을 적어주세요.' id='price' />
          </S.InputBox>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='rating'>맛 평가</S.Label>
            <S.RatingBox>
              <img src={IconStarOn} alt='별점 1점' />
              <img src={IconStarOff} alt='별점 2점' />
              <img src={IconStarOff} alt='별점 3점' />
              <img src={IconStarOff} alt='별점 4점' />
              <img src={IconStarOff} alt='별점 5점' />
            </S.RatingBox>
          </S.InputBox>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='storeName'>상호명</S.Label>
            <S.Input type='text' placeholder='상호명을 입력해주세요.' id='storeName' />
            <S.LocationBtn src={IconLocationOff} alt='지도맵 버튼' />
          </S.InputBox>
          <S.InputBox length='2rem'>
            <S.Label htmlFor='storeLocation'>위치</S.Label>
            <S.Input
              type='text'
              placeholder='매장의 위치를 입력해주세요.'
              className='location'
              id='storeLocation'
            />
          </S.InputBox>
          <S.SectionBorder></S.SectionBorder>
          <S.SubTitleBox>
            <img src={IconAddInput} alt='' />
            <span>추가 선택 입력</span>
          </S.SubTitleBox>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='review'>후기</S.Label>
            <S.Input
              type='text'
              placeholder='간단한 후기를 남겨주세요.(최대 100자)'
              maxlength='100'
              id='review'
            />
          </S.InputBox>
          <S.BoxWrapper length='1.2rem'>
            <S.TagLabel htmlFor='tag'>태그</S.TagLabel>
            <S.TagImgBox>
              <S.TagInput placeholder='태그를 추가해보세요. (6자이하)' id='tag' />
              <S.TagList>
                <S.Tag>#넘달아용</S.Tag>
                <S.Tag>#마지막방문임</S.Tag>
              </S.TagList>
            </S.TagImgBox>
          </S.BoxWrapper>
          <S.BoxWrapper>
            <S.ImgLabel>사진</S.ImgLabel>
            <S.ImgLabelBtn htmlFor='img'>
              <img src={IconAddPhoto} alt='사진 등록 버튼' />
            </S.ImgLabelBtn>
            <input
              style={{ display: 'none' }}
              type='file'
              accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
              id='img'
            />
          </S.BoxWrapper>
        </S.Form>
      </S.Container>
      <NavBar page='upload' />
    </>
  );
}

export default PostUpload;
