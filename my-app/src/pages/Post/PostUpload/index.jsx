import React, { useCallback, useState } from 'react';
import useOutsideDetect from '../../../hooks/useOutsideDetect';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import Button from '../../../components/common/Button';
import IconStarOff from '../../../assets/Icon-star-off.png';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconLocationOff from '../../../assets/Icon-Nav-Map-off.png';
import IconCalendar from '../../../assets/Icon-Calendar.png';
import IconAddInput from '../../../assets/Icon-AddInput.png';
import IconAddPhoto from '../../../assets/Icon-AddPhoto.png';
import SELECTBOX_DATA from '../SELECTBOX_DATA';
import * as S from './style';

function PostUpload() {
  const [isShowOptionCategory, setIsShowOptionCategory, categoryRef, handleDisplayCategory] =
    useOutsideDetect(false);
  const [isShowOptionTheme, setIsShowOptionTheme, themeRef, handleDisplayTheme] =
    useOutsideDetect(false);
  const [currentCategory, setCurrentCategory] = useState(SELECTBOX_DATA[0].name);
  const [currentTheme, setCurrentTheme] = useState(SELECTBOX_DATA[0].option[0].subName);
  const [currentSelect, setCurrentSelect] = useState(1);

  const handleClickListCategory = useCallback((e) => {
    setCurrentCategory(e.target.innerText);
    setCurrentTheme(
      e.target.innerText === '음료'
        ? SELECTBOX_DATA[0].option[0].subName
        : SELECTBOX_DATA[1].option[0].subName,
    );
    setIsShowOptionCategory(false);
    e.stopPropagation();
  }, []);

  const handleClickListTheme = useCallback((e) => {
    setCurrentTheme(e.target.innerText);
    setIsShowOptionTheme(false);
    e.stopPropagation();
  }, []);

  const subOption = SELECTBOX_DATA.find((category) => category.id === currentSelect).option;

  return (
    <>
      <Header title='오늘 작성할 커디어리' rightChild={<Button size='sm' text='등록' />} />
      <S.Container>
        <S.Form>
          <S.SelectBoxWrapper>
            <h1 className='ir'>카테고리 선택</h1>
            <S.SelectBox
              options={isShowOptionCategory}
              onClick={handleDisplayCategory}
              ref={categoryRef}
            >
              <S.CurrentSelect type='button' options={isShowOptionCategory}>
                {currentCategory}
              </S.CurrentSelect>
              {isShowOptionCategory && (
                <S.ListBox options={isShowOptionCategory} onClick={handleClickListCategory}>
                  {SELECTBOX_DATA.map((category) => (
                    <S.ListOption key={category.id} onClick={() => setCurrentSelect(category.id)}>
                      {category.name}
                    </S.ListOption>
                  ))}
                </S.ListBox>
              )}
            </S.SelectBox>
            <S.SelectBox options={isShowOptionTheme} onClick={handleDisplayTheme} ref={themeRef}>
              <S.CurrentSelect type='button' options={isShowOptionTheme}>
                {currentTheme}
              </S.CurrentSelect>
              {isShowOptionTheme && (
                <S.ListBox options={isShowOptionTheme} onClick={handleClickListTheme}>
                  {subOption.map((option) => (
                    <S.ListOption key={option.subId}>{option.subName}</S.ListOption>
                  ))}
                </S.ListBox>
              )}
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
