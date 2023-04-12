import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import '../PostForm/datepicker.css';
import {
  categoryState,
  themeState,
  dateState,
  menuNameState,
  menuPriceState,
  starRatingState,
  reviewState,
} from '../../../atom/postRecoil';
import modalState from '../../../atom/modalRecoil';
import SELECTBOX_DATA from '../CategorySelectBox/SELECTBOX_DATA';
import CategorySelectBox from '../CategorySelectBox';
import TasteRating from '../TasteRating';
import IconCalendar from '../../../assets/Icon-Calendar.png';
import useOutsideDetect from '../../../hooks/useOutsideDetect';

import Portal from '../../../components/modal/Portal';
import IconBack from '../../../assets/Icon-X.png';
import BottomSheetForm from '../../../components/modal/BottomSheet/BottomSheetStyle/BottomSheetForm';
import BottomSheet from '../../../components/modal/BottomSheet';
import * as S from './style';

function PostForm() {
  const [isShowOptionCategory, setIsShowOptionCategory, categoryRef, handleDisplayCategory] =
    useOutsideDetect(false);
  const [isShowOptionTheme, setIsShowOptionTheme, themeRef, handleDisplayTheme] =
    useOutsideDetect(false);

  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const [currentSelect, setCurrentSelect] = useState(1);

  const [startDate, setStartDate] = useRecoilState(dateState);
  const [dateValid, setDateValid] = useState(false);

  const [menuName, setMenuName] = useRecoilState(menuNameState);
  const [menuNameValid, setMenuNameValid] = useState(false);

  const [menuPrice, setMenuPrice] = useRecoilState(menuPriceState);
  const [menuPriceValid, setMenuPriceValid] = useState(false);

  const [ratingClicked, setRatingClicked] = useRecoilState(starRatingState);
  const [ratingHovered, setRatingHovered] = useState(0);
  const [ratingValid, setRatingValid] = useState(false);

  const [mapModal, setMapModal] = useRecoilState(modalState);

  const textareaRef = useRef();
  const [review, setReview] = useRecoilState(reviewState);

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

  const handleCheckCategory = useCallback(
    (id) => {
      setCurrentSelect(id);
    },
    [currentSelect],
  );

  const subOption = SELECTBOX_DATA.find((category) => category.id === currentSelect).option;

  useEffect(() => {
    if (!startDate) {
      setDateValid(false);
      return;
    }

    const form = new FormData();

    form.append('date', format(startDate, 'yyyy.MM.dd'));
  }, [startDate]);

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

  const handleStarRatingClicked = useCallback(
    (rating) => {
      setRatingClicked(rating);
      setRatingValid(true);
    },
    [onclick],
  );

  const handleMouseChecked = useCallback(
    (mouse) => {
      setRatingHovered(mouse);
    },
    [onmouseenter, onmouseleave],
  );

  const onClickIcon = () => {
    console.log('눌렀음');
    setMapModal({ ...mapModal, visible: false });
  };

  useEffect(() => {
    textareaRef.current.style.height = 'auto';
    const scrollHeight = textareaRef.current.scrollHeight;

    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [review]);

  const handleValidCheck = useCallback((e) => {
    if (e.target.value === '') {
      setMenuNameValid(false);
      setDateValid(false);
      setMenuPriceValid(false);
    }
  }, []);

  useEffect(() => {
    if (menuNameValid && dateValid && menuPriceValid && ratingValid) {
      console.log('버튼활성화 조건');
    }
  }, [menuNameValid, dateValid, menuPriceValid, ratingValid]);

  return (
    <>
      <S.Container>
        <S.Form>
          <S.SelectBoxWrapper>
            <h1 className='ir'>카테고리 선택</h1>
            <CategorySelectBox
              boxValue={true}
              optiondata={SELECTBOX_DATA}
              selectedRef={categoryRef}
              isShowOption={isShowOptionCategory}
              handleClickList={handleClickListCategory}
              currentSelected={currentCategory}
              handleDisplay={handleDisplayCategory}
              handleCheckCategory={handleCheckCategory}
            />
            <CategorySelectBox
              boxValue={false}
              subOption={subOption}
              selectedRef={themeRef}
              isShowOption={isShowOptionTheme}
              handleClickList={handleClickListTheme}
              currentSelected={currentTheme}
              handleDisplay={handleDisplayTheme}
            />
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
              maxLength='7'
              value={menuPrice}
              onChange={handlePriceChange}
              onBlur={handleValidCheck}
            />
          </S.InputBox>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='rating'>맛 평가</S.Label>
            <TasteRating
              ratingClicked={ratingClicked}
              handleStarRatingClicked={handleStarRatingClicked}
              ratingHovered={ratingHovered}
              handleMouseChecked={handleMouseChecked}
            />
          </S.InputBox>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='storeName'>상호명</S.Label>
            <S.Input type='text' placeholder='상호명을 입력해주세요.' id='storeName' />
            <S.LocationBtn type='button' onClick={() => onClickIcon()}></S.LocationBtn>
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
            <span>추가 선택 입력</span>
          </S.SubTitleBox>
          <S.InputBox align='start' length='1.2rem'>
            <S.Label padding='0.86rem 0' htmlFor='review'>
              후기
            </S.Label>
            <S.ReviewInput
              type='text'
              placeholder='간단한 후기를 남겨주세요.(최대 100자)'
              maxLength='100'
              rows={1}
              id='review'
              value={review}
              ref={textareaRef}
              onChange={(e) => setReview(e.target.value)}
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
            <S.ImgLabelBtn htmlFor='img'></S.ImgLabelBtn>
            <input type='file' accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic' id='img' />
          </S.BoxWrapper>
        </S.Form>
      </S.Container>
      <Portal>
        <BottomSheet visible={mapModal} onClickClose={onClickIcon}>
          <BottomSheetForm
            title='위치검색'
            Icon={IconBack}
            IconAlt='아이콘Alt'
            onClickIcon={onClickIcon}
          />
        </BottomSheet>
      </Portal>
    </>
  );
}

export default PostForm;
