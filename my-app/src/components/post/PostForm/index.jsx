import React, { useState, useCallback, useEffect, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from 'uuid';
import { setHours } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useRecoilState, useRecoilValue } from 'recoil';
import DatePicker from 'react-datepicker';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import imageCompression from 'browser-image-compression';
import { storage } from '../../../firebase';
import { authState } from '../../../atom/authRecoil';
import '../PostForm/datepicker.css';
import {
  themeState,
  categoryState,
  dateState,
  menuNameState,
  menuPriceState,
  starRatingState,
  reviewState,
  tagListState,
  imageListState,
  inputValidState,
  imageDeleteState,
} from '../../../atom/postUploadRecoil';
import placeState from '../../../atom/mapRecoil';
import modalState from '../../../atom/modalRecoil';
import SELECTBOX_DATA from '../CategorySelectBox/SELECTBOX_DATA';
import CategorySelectBox from '../CategorySelectBox';
import useOutsideDetect from '../../../hooks/useOutsideDetect';
import TagItems from '../../post/TagItem';
import TasteRating from '../TasteRating';
import ImageUpload from '../ImageUpload';
import IconCalendar from '../../../assets/Icon-Calendar.png';
import Portal from '../../../components/modal/Portal';
import IconBack from '../../../assets/Icon-X.png';
import BottomSheetForm from '../../../components/modal/BottomSheet/BottomSheetStyle/BottomSheetForm';
import BottomSheet from '../../../components/modal/BottomSheet';
import * as S from './style';

function PostForm({ editPost, edit }) {
  const { kakao } = window;
  const [isShowOptionTheme, setIsShowOptionTheme, themeRef, handleDisplayTheme] =
    useOutsideDetect(false);
  const [isShowOptionCategory, setIsShowOptionCategory, categoryRef, handleDisplayCategory] =
    useOutsideDetect(false);

  const [inputValid, setInputValid] = useRecoilState(inputValidState);

  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);
  const [currentSelectTheme, setCurrentSelectTheme] = useState(1);
  const [currentSelectCategory, setCurrentSelectCategory] = useState(1);

  const [startDate, setStartDate] = useRecoilState(dateState);

  const [menuName, setMenuName] = useRecoilState(menuNameState);

  const [menuPrice, setMenuPrice] = useRecoilState(menuPriceState);

  const [ratingClicked, setRatingClicked] = useRecoilState(starRatingState);
  const [ratingHovered, setRatingHovered] = useState(0);

  const [mapModal, setMapModal] = useRecoilState(modalState);
  const [place, setPlace] = useRecoilState(placeState);
  const [isLocationCheck, setIsLocationCheck] = useState(false);

  const textareaRef = useRef();
  const [review, setReview] = useRecoilState(reviewState);

  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useRecoilState(tagListState);
  const [tagStyled, setTagStyled] = useState(false);
  const [tagInputStyled, setTagInputStyled] = useState(false);
  const [tagInputHeight, setTagInputHeight] = useState(false);

  const [imageList, setImageList] = useRecoilState(imageListState);
  const [imageLoadingLength, setImageLoadingLength] = useState(0);
  const [imageDeleteList, setImageDeleteList] = useRecoilState(imageDeleteState);

  const userAuth = useRecoilValue(authState);

  useEffect(() => {
    if (edit) {
      const currentSelectThemeValue = SELECTBOX_DATA.find(
        (theme) => theme.name === editPost?.theme,
      )?.id;

      const currentSelectCategoryValue = SELECTBOX_DATA.filter(
        (main) => main.name === editPost?.theme,
      ).map((sub) => sub.option.find((category) => category.subName === editPost?.category)?.subId);

      if (
        editPost?.menu &&
        editPost?.price &&
        editPost?.score &&
        editPost?.address &&
        editPost?.shop &&
        editPost?.date
      ) {
        setInputValid({
          ...inputValid,
          menuNameValid: true,
          menuPriceValid: true,
          ratingValid: true,
          storeValid: true,
          addressValid: true,
          dateValid: true,
        });
      }

      if (editPost.tag.length > 0) setTagStyled(true);

      setCurrentTheme(editPost?.theme);
      setCurrentSelectTheme(currentSelectThemeValue);
      setCurrentCategory(editPost?.category);
      setCurrentSelectCategory(currentSelectCategoryValue);
      setStartDate(editPost?.date.seconds * 1000);
      setMenuName(editPost?.menu);
      setMenuPrice(editPost?.price);
      setRatingClicked(editPost?.score);
      setRatingHovered(editPost?.score);
      setPlace({
        lat: editPost.address.latLng[0],
        lng: editPost.address.latLng[1],
        store: editPost.shop,
        address: editPost.address.location,
      });
      setReview(editPost?.review);
      setTagList([...editPost.tag]);
      setImageList([...editPost.photo]);
    }
  }, []);

  const handleClickListTheme = useCallback((e) => {
    setCurrentTheme(e.target.innerText);
    setCurrentCategory(
      e.target.innerText === '음료'
        ? SELECTBOX_DATA[0].option[0].subName
        : SELECTBOX_DATA[1].option[0].subName,
    );
    setIsShowOptionTheme(false);
    e.stopPropagation();
  }, []);

  const handleClickListCategory = useCallback((e) => {
    setCurrentCategory(e.target.innerText);
    setIsShowOptionCategory(false);
    e.stopPropagation();
  }, []);

  const handleCheckTheme = useCallback(
    (id) => {
      setCurrentSelectTheme(id);
      setCurrentSelectCategory(1);
    },
    [currentSelectTheme],
  );

  const handleCheckCategory = useCallback(
    (id) => {
      setCurrentSelectCategory(id);
    },
    [currentSelectCategory],
  );

  const subOption = SELECTBOX_DATA.find((category) => category.id === currentSelectTheme).option;

  useEffect(() => {
    if (!startDate) {
      setInputValid((prev) => ({ ...prev, dateValid: false }));
    }
  }, [startDate]);

  useEffect(() => {
    if (menuName === '') {
      setInputValid((prev) => ({ ...prev, menuNameValid: false }));
    }
  }, [menuName]);

  const handlePriceChange = useCallback(
    (e) => {
      const priceRegExp = /^[0-9,]+$/.test(e.target.value);

      if (!priceRegExp && menuPrice === '') return;

      const uncomma = e.target.value.replace(/[^\d]+/g, '');
      const comma = uncomma.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

      setMenuPrice(comma);
      setInputValid((prev) => ({ ...prev, menuPriceValid: priceRegExp }));

      if (comma.length > 3) {
        const unitsNum = comma.slice(-1);
        const tensNum = comma.slice(-2, -1);
        const checkNum = parseInt(tensNum, 10) > 0 && parseInt(unitsNum, 10) > 0;

        if (!checkNum) {
          setMenuPrice(comma);
          setInputValid((prev) => ({ ...prev, menuPriceValid: true }));
        } else {
          alert('금액을 10원 단위로 입력해 주세요.');
          setMenuPrice('');
          setInputValid((prev) => ({ ...prev, menuPriceValid: false }));
        }
      }
    },
    [menuPrice],
  );

  const handleStarRatingClicked = useCallback(
    (rating) => {
      setRatingClicked(rating);
      setInputValid((prev) => ({ ...prev, ratingValid: true }));
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
    setMapModal({ ...mapModal, visible: false });
  };

  // 위치 관련
  const handleCurrentLocation = useCallback(() => {
    setIsLocationCheck((prev) => !prev);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPlace((prev) => ({
            ...prev,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }));
          getAddr(position.coords.latitude, position.coords.longitude);
          setIsLocationCheck((prev) => !prev);
          setInputValid((prev) => ({ ...prev, addressValid: true }));
          setMapModal({ ...mapModal, visible: false });
        },
        (err) => {
          setPlace((prev) => ({
            ...prev,
            current: '현재 위치를 표시할 수 없습니다.',
          }));
        },
      );
    } else {
      setPlace((prev) => ({
        ...prev,
        current: '현재 위치를 표시할 수 없습니다.',
      }));
    }
  }, []);

  // 좌표 -> 주소
  const getAddr = (lat, lng) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lng);

    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setPlace((prev) => ({
          ...prev,
          address: result[0].road_address.address_name,
          current: result[0].road_address.address_name,
        }));
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  const handleStoreChange = useCallback(
    (e) => {
      setPlace((prev) => ({
        ...prev,
        store: e.target.value,
      }));
      setInputValid((prev) => ({ ...prev, storeValid: true }));

      if (e.target.value === '') {
        setInputValid((prev) => ({ ...prev, storeValid: false }));
      }
    },
    [place.store],
  );

  const handleAddressChange = useCallback(
    (e) => {
      setPlace((prev) => ({
        ...prev,
        address: e.target.value,
        lat: 0,
        lng: 0,
      }));
      setInputValid((prev) => ({ ...prev, addressValid: true }));

      if (e.target.value === '') {
        setInputValid((prev) => ({ ...prev, addressValid: false }));
      }
    },
    [place.address],
  );

  useEffect(() => {
    textareaRef.current.style.height = 'auto';
    const scrollHeight = textareaRef.current.scrollHeight;

    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [review]);

  const handleInputValue = useCallback(
    (e) => {
      if (e.target.value.length > 6) {
        e.target.value = e.target.value.slice(0, 6);
      }
      setTagItem(e.target.value);
    },
    [tagItem],
  );

  const handleEnterPress = useCallback(
    (e) => {
      if (e.nativeEvent.isComposing) return;

      if (e.target.value.length > 0 && e.key === 'Enter') {
        if (tagList.length < 2) {
          setTagList([...tagList, `${tagItem}`]);
          setTagStyled(true);
          setTagItem('');
        } else {
          alert('태그는 2개까지만 가능합니다.');
          setTagItem('');
        }
      }
    },
    [tagItem],
  );

  useEffect(() => {
    if (tagList.length === 2) {
      setTagInputStyled(true);
      setTagInputHeight(true);
    } else {
      setTagInputStyled(false);
      setTagInputHeight(false);
    }
  }, [tagItem, tagList]);

  const handleTagDelete = useCallback(
    (tagIndex) => {
      const tagLeaveList = tagList.filter((_, i) => tagIndex !== i);

      if (tagLeaveList.length === 0) {
        setTagStyled(false);
        setTagList(tagLeaveList);
        return;
      }

      setTagList(tagLeaveList);
    },
    [tagList],
  );

  const handleFileChange = useCallback(
    async (e) => {
      if (!e) return;

      const file = e.target?.files[0];

      console.log(setImageLoadingLength);

      console.log('file크기', file.length);

      if (!file) return;
      if (imageList.length > 2) {
        alert('이미지는 3장까지 등록할 수 있습니다.');
        return;
      }

      const options = {
        masSizeMb: 0.02,
        maxWidthOrHeight: 1080,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        const encordingFile = new File([compressedFile], file.name, { type: file.type });
        const image = window.URL.createObjectURL(compressedFile);

        window.URL.revokeObjectURL((prev) => [...prev, image]);

        const imageRef = ref(storage, `${userAuth?.uid}/${uuidv4()}`);
        const uploadTask = uploadBytesResumable(imageRef, encordingFile);

        if (!imageRef) return;

        uploadTask.on(
          'state_change',
          (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

            setImageLoadingLength(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((getUrl) => {
              setImageList([...imageList, getUrl]);
              setImageLoadingLength(0);
            });
          },
        );
      } catch (error) {
        console.log('[ErrorMsg]', error);
      }
    },
    [imageList],
  );

  const handleImageDelete = useCallback(
    async (imageIndex) => {
      const imageLeaveList = imageList.filter((_, i) => imageIndex !== i);
      const imageDelete = imageList.filter((_, i) => imageIndex === i);

      setImageList(imageLeaveList);
      setImageDeleteList([...imageDeleteList, ...imageDelete]);
    },
    [imageList],
  );

  const handleValidCheck = useCallback(
    (e, key) => {
      if (e === '') {
        switch (key) {
          case 'menuNameValid':
            setInputValid({ ...inputValid, menuNameValid: false });
            break;
          case 'menuPriceValid':
            setInputValid({ ...inputValid, menuPriceValid: false });
            break;
          case 'storeValid':
            setInputValid({ ...inputValid, storeValid: false });
            break;
          case 'addressValid':
            setInputValid({ ...inputValid, addressValid: false });
            break;
          default:
            break;
        }
      }
    },
    [inputValid],
  );

  return (
    <>
      <S.Container>
        <S.Form>
          <S.SelectBoxWrapper>
            <h1 className='ir'>카테고리 선택</h1>
            <CategorySelectBox
              boxValue={true}
              optiondata={SELECTBOX_DATA}
              selectedRef={themeRef}
              isShowOption={isShowOptionTheme}
              handleClickList={handleClickListTheme}
              currentSelected={currentTheme}
              handleDisplay={handleDisplayTheme}
              handleCheckTheme={handleCheckTheme}
              currentSelectList={currentSelectTheme}
            />
            <CategorySelectBox
              boxValue={false}
              subOption={subOption}
              selectedRef={categoryRef}
              isShowOption={isShowOptionCategory}
              handleClickList={handleClickListCategory}
              currentSelected={currentCategory}
              handleDisplay={handleDisplayCategory}
              handleCheckCategory={handleCheckCategory}
              currentSelectCategory={currentSelectCategory}
            />
          </S.SelectBoxWrapper>
          <S.InputBox length='1.2rem'>
            <S.Label htmlFor='date'>날짜</S.Label>
            <DatePicker
              dateFormat='yyyy.MM.dd'
              selected={startDate}
              onChange={(date) => {
                setStartDate(setHours(date, 9));
                setInputValid((prev) => ({ ...prev, dateValid: true }));
              }}
              placeholderText='0000.00.00'
              locale={ko}
              closeOnScroll={true}
              showPopperArrow={false}
              disabledKeyboardNavigation
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
              onChange={(e) => {
                setMenuName(e.target.value);
                setInputValid((prev) => ({ ...prev, menuNameValid: true }));
              }}
              onBlur={(e) => handleValidCheck(e.target.value, 'dateValid')}
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
              onBlur={(e) => handleValidCheck(e.target.value, 'menuPriceValid')}
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
            <S.Input
              type='text'
              placeholder='상호명을 입력해주세요.'
              id='storeName'
              value={place.store}
              onChange={handleStoreChange}
              onBlur={(e) => handleValidCheck(e.target.value, 'storeValid')}
            />
            <S.LocationBtn
              type='button'
              alt='지도 검색 버튼'
              onClick={() => onClickIcon()}
            ></S.LocationBtn>
          </S.InputBox>
          <S.InputBox length='2rem'>
            <S.Label htmlFor='storeLocation'>위치</S.Label>
            <S.Input
              type='text'
              placeholder='매장의 위치를 입력해주세요.'
              value={place.address}
              onChange={handleAddressChange}
              onBlur={handleValidCheck}
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
            <S.Label htmlFor='tag' padding='0.6rem 0'>
              태그
            </S.Label>
            <S.TagImgBox>
              <S.TagInput
                type='text'
                placeholder='태그를 추가해보세요.(6자이하)'
                id='tag'
                maxLength='6'
                tagBorderStyled={tagStyled}
                tagInputStyled={tagInputStyled}
                tagInputHeight={tagInputHeight}
                value={tagItem}
                onChange={handleInputValue}
                onKeyDown={handleEnterPress}
              />
              <TagItems
                tagList={tagList}
                tagBorderStyled={tagStyled}
                handleTagDelete={handleTagDelete}
              />
            </S.TagImgBox>
          </S.BoxWrapper>
          <S.BoxWrapper>
            <S.Label padding='0.8rem 0'>사진</S.Label>
            <ImageUpload
              handleFileChange={handleFileChange}
              handleImageDelete={handleImageDelete}
              src={imageList}
              imageLoadingLength={imageLoadingLength}
            />
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
            handleCurrentLocation={handleCurrentLocation}
            currentAddress={place.current === '' ? '' : place.current}
            isLocationCheck={isLocationCheck}
          />
        </BottomSheet>
      </Portal>
    </>
  );
}

export default PostForm;
