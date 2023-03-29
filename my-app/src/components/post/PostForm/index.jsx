import React, { useState, useCallback, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import '../PostForm/datepicker.css';
import IconStarOff from '../../../assets/Icon-star-off.png';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconLocationOff from '../../../assets/Icon-Nav-Map-off.png';
import IconCalendar from '../../../assets/Icon-Calendar.png';
import IconAddInput from '../../../assets/Icon-AddInput.png';
import IconAddPhoto from '../../../assets/Icon-AddPhoto.png';
import SELECTBOX_DATA from '../Category/SELECTBOX_DATA';
import Category from '../Category';
import * as S from './style';

function PostForm() {
  const [startDate, setStartDate] = useState(null);
  const [dateValid, setDateValid] = useState(false);

  const [menuName, setMenuName] = useState('');
  const [menuNameValid, setMenuNameValid] = useState(false);

  const [menuPrice, setMenuPrice] = useState('');
  const [menuPriceValid, setMenuPriceValid] = useState(false);

  useEffect(() => {
    if (menuNameValid && dateValid && menuPriceValid) {
      console.log('버튼활성화 조건');
    }
  }, [menuNameValid, dateValid, menuPriceValid]);

  useEffect(() => {
    if (!startDate) {
      setDateValid(false);
      return;
    }

    const form = new FormData();

    form.append('date', format(startDate, 'yyyy.MM.dd'));
  }, [startDate]);

  const handleValidCheck = useCallback((e) => {
    if (e.target.value === '') {
      setMenuNameValid(false);
      setDateValid(false);
      setMenuPriceValid(false);
    }
  }, []);

  useEffect(() => {
    const result = !!menuName.length;

    setMenuNameValid(result);
    if (menuName === '') setMenuNameValid(false);
  }, [menuName]);

  const handlePriceChange = useCallback(
    (e) => {
      const priceRegExp = /^[0-9,]+$/.test(e.target.value);

      if (!priceRegExp && menuPrice === '') return;

      const uncomma = e.target.value.replace(/[^\d]+/g, '');
      const comma = uncomma.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

      setMenuPrice(comma);
      setMenuPriceValid(priceRegExp);

      if (comma.length > 3) {
        const unitsNum = comma.slice(-1);
        const tensNum = comma.slice(-2, -1);
        const checkNum = parseInt(tensNum, 10) > 0 && parseInt(unitsNum, 10) > 0;

        if (!checkNum) {
          setMenuPrice(comma);
          setMenuPriceValid(true);
        } else {
          alert('금액을 10원 단위로 입력해 주세요.');
          setMenuPrice('');
        }
      }
    },
    [menuPrice],
  );

  return (
    <>
      <S.Container>
        <S.Form>
          <S.SelectBoxWrapper>
            <h1 className='ir'>카테고리 선택</h1>
            <Category optiondata={SELECTBOX_DATA} />
          </S.SelectBoxWrapper>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='date'>날짜</S.Label>
            <DatePicker
              dateFormat='yyyy.MM.dd'
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setDateValid(true);
              }}
              placeholderText='0000.00.00'
              locale={ko}
              closeOnScroll={true}
              showPopperArrow={false}
              disabledKeyboardNavigation
              onBlur={handleValidCheck}
            />
            <S.CalendarBtn src={IconCalendar} alt='달력 버튼' />
          </S.InputBox>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='menuName'>메뉴명</S.Label>
            <S.Input
              type='text'
              placeholder='메뉴명을 적어주세요.'
              id='menuName'
              maxLength={20}
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              onBlur={handleValidCheck}
            />
          </S.InputBox>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='price'>가격</S.Label>
            <S.Input
              type='text'
              placeholder='가격을 적어주세요.'
              id='price'
              maxLength={7}
              value={menuPrice}
              onChange={handlePriceChange}
              onBlur={handleValidCheck}
            />
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
    </>
  );
}

export default PostForm;
