import React from 'react';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import Button from '../../../components/common/Button';
import IconStarOff from '../../../assets/Icon-star-off.png';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconLocationOff from '../../../assets/Icon-Nav-Map-off.png';
import IconCalendar from '../../../assets/Icon-Calendar.png';
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
          <S.InputBox>
            <S.Label>날짜</S.Label>
            <S.Input placeholder='22.02.18' className='calendar' />
            <S.CalendarBtn src={IconCalendar} alt='달력 버튼' />
          </S.InputBox>
          <S.InputBox>
            <S.Label>메뉴명</S.Label>
            <S.Input placeholder='메뉴명을 적어주세요.' />
          </S.InputBox>
          <S.InputBox>
            <S.Label>가격</S.Label>
            <S.Input placeholder='가격을 적어주세요.' />
          </S.InputBox>
          <S.InputBox>
            <S.Label>맛 평가</S.Label>
            <S.RatingBox>
              <img src={IconStarOn} alt='별점 1점' />
              <img src={IconStarOff} alt='별점 2점' />
              <img src={IconStarOff} alt='별점 3점' />
              <img src={IconStarOff} alt='별점 4점' />
              <img src={IconStarOff} alt='별점 5점' />
            </S.RatingBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>상호명</S.Label>
            <S.Input placeholder='상호명을 입력해주세요.' />
            <S.LocationBtn src={IconLocationOff} alt='지도맵 버튼' />
          </S.InputBox>
          <S.InputBox>
            <S.Label>위치</S.Label>
            <S.Input placeholder='매장의 위치를 입력해주세요.' className='location' />
          </S.InputBox>
          <S.SectionBorder></S.SectionBorder>
          <S.InputBox>
            <S.Label>위치</S.Label>
            <S.Input placeholder='매장의 위치를 입력해주세요.' className='location' />
          </S.InputBox>
        </S.Form>
      </S.Container>
      <NavBar page='upload' />
    </>
  );
}

export default PostUpload;
